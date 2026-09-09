import { Component, OnInit, signal, effect, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BudgetService, ProjectBudgetSummary, ExpenseRecord, BudgetAllocation } from '../../../services/budget.service';
import { ProjectService, Project } from '../../../services/project.service';

@Component({
  selector: 'app-pm-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget.html'
})
export class ProjectManagerBudget implements OnInit {
  budgetService = inject(BudgetService);
  projectService = inject(ProjectService);

  projects = this.projectService.projects;
  selectedProjectId = signal<string>('');
  budgetSummary = this.budgetService.budgetSummary;

  // Modals state
  showExpenseModal = signal(false);
  showAllocationModal = signal(false);

  // Loading and Error states
  isLoading = signal(false);
  errorMessage = signal<string | null>(null);

  newExpense = {
    category_id: '',
    description: '',
    amount: 0,
    expense_date: new Date().toISOString().split('T')[0]
  };

  newAllocation = {
    category_id: '',
    allocated_amount: 0,
    allocation_date: new Date().toISOString().split('T')[0],
    description: ''
  };

  // Edit states
  editingAllocationId = signal<string | null>(null);
  editingEstimateId = signal<string | null>(null);
  editingExpenseId = signal<string | null>(null);

  showPlannedBudgetModal = signal(false);
  newPlannedBudget = 0;

  categories = this.budgetService.categories;

  constructor() {
    effect(() => {
      const projs = this.projects();
      if (projs.length > 0 && !this.selectedProjectId()) {
        this.selectedProjectId.set(projs[0].id);
        this.loadBudget();
      }
    });
  }

  ngOnInit() {

    this.budgetService.getCategories().subscribe();
  }

  onProjectChange(event: any) {
    this.selectedProjectId.set(event.target.value);
    this.loadBudget();
  }

  loadBudget() {
    if (this.selectedProjectId()) {
      this.isLoading.set(true);
      this.errorMessage.set(null);
      this.budgetService.getProjectBudgetSummary(this.selectedProjectId()).subscribe({
        next: () => {
          this.isLoading.set(false);
        },
        error: (err) => {
          this.isLoading.set(false);
          this.errorMessage.set(err?.error?.detail || 'Unable to load budget information.');
        }
      });
    }
  }

  openExpenseModal() {
    this.showExpenseModal.set(true);
  }

  closeExpenseModal() {
    this.showExpenseModal.set(false);
  }

  openAllocationModal() {
    this.showAllocationModal.set(true);
  }

  closeAllocationModal() {
    this.showAllocationModal.set(false);
    this.editingAllocationId.set(null);
    this.newAllocation = { category_id: '', allocated_amount: 0, allocation_date: new Date().toISOString().split('T')[0], description: '' };
  }

  submitExpense() {
    if (this.selectedProjectId() && this.newExpense.category_id && this.newExpense.amount > 0) {
      if (this.editingExpenseId()) {
        this.budgetService.updateExpense(this.selectedProjectId(), this.editingExpenseId()!, this.newExpense).subscribe(() => {
          this.closeExpenseModal();
          this.loadBudget();
        });
      } else {
        this.budgetService.createExpense(this.selectedProjectId(), this.newExpense).subscribe(() => {
          this.closeExpenseModal();
          this.loadBudget();
        });
      }
    }
  }

  editExpense(exp: ExpenseRecord) {
    this.newExpense = {
      category_id: exp.category_id,
      description: exp.description,
      amount: exp.amount,
      expense_date: exp.expense_date.split('T')[0]
    };
    this.editingExpenseId.set(exp.id);
    this.openExpenseModal();
  }

  deleteExpense(expId: string) {
    if(confirm('Are you sure you want to delete this expense?')) {
      this.budgetService.deleteExpense(this.selectedProjectId(), expId).subscribe(() => {
        this.loadBudget();
      });
    }
  }

  submitAllocation() {
    if (this.selectedProjectId() && this.newAllocation.category_id && this.newAllocation.allocated_amount > 0) {
      if (this.editingAllocationId()) {
        this.budgetService.updateBudgetAllocation(this.selectedProjectId(), this.editingAllocationId()!, this.newAllocation).subscribe(() => {
          this.closeAllocationModal();
          this.loadBudget();
        });
      } else {
        this.budgetService.createBudgetAllocation(this.selectedProjectId(), this.newAllocation).subscribe(() => {
          this.closeAllocationModal();
          this.loadBudget();
        });
      }
    }
  }

  editAllocation(alloc: BudgetAllocation) {
    this.newAllocation = {
      category_id: alloc.category_id,
      allocated_amount: alloc.allocated_amount,
      allocation_date: alloc.allocation_date || new Date().toISOString().split('T')[0],
      description: alloc.description || ''
    };
    this.editingAllocationId.set(alloc.id);
    this.openAllocationModal();
  }

  deleteAllocation(allocId: string) {
    if(confirm('Are you sure you want to delete this allocation?')) {
      this.budgetService.deleteBudgetAllocation(this.selectedProjectId(), allocId).subscribe(() => {
        this.loadBudget();
      });
    }
  }

  // Cost Estimates
  showEstimateModal = signal(false);
  newEstimate = {
    category_id: '',
    activity: '',
    description: '',
    estimated_amount: 0
  };

  openEstimateModal() {
    this.showEstimateModal.set(true);
  }

  closeEstimateModal() {
    this.showEstimateModal.set(false);
    this.editingEstimateId.set(null);
    this.newEstimate = { category_id: '', activity: '', description: '', estimated_amount: 0 };
  }

  submitEstimate() {
    if (this.selectedProjectId() && this.newEstimate.category_id && this.newEstimate.activity && this.newEstimate.estimated_amount > 0) {
      if (this.editingEstimateId()) {
        this.budgetService.updateCostEstimate(this.selectedProjectId(), this.editingEstimateId()!, this.newEstimate).subscribe(() => {
          this.closeEstimateModal();
          this.loadBudget();
        });
      } else {
        this.budgetService.createCostEstimate(this.selectedProjectId(), this.newEstimate).subscribe(() => {
          this.closeEstimateModal();
          this.loadBudget();
        });
      }
    }
  }

  editEstimate(est: any) {
    this.newEstimate = {
      category_id: est.category_id,
      activity: est.activity,
      description: est.description || '',
      estimated_amount: est.estimated_amount
    };
    this.editingEstimateId.set(est.id);
    this.openEstimateModal();
  }

  deleteEstimate(estId: string) {
    if(confirm('Are you sure you want to delete this estimate?')) {
      this.budgetService.deleteCostEstimate(this.selectedProjectId(), estId).subscribe(() => {
        this.loadBudget();
      });
    }
  }

  openPlannedBudgetModal() {
    this.newPlannedBudget = this.budgetSummary()?.total_budget || 0;
    this.showPlannedBudgetModal.set(true);
  }

  closePlannedBudgetModal() {
    this.showPlannedBudgetModal.set(false);
  }

  submitPlannedBudget() {
    if (this.selectedProjectId() && this.newPlannedBudget >= 0) {
      this.budgetService.updatePlannedBudget(this.selectedProjectId(), this.newPlannedBudget).subscribe(() => {
        this.closePlannedBudgetModal();
      });
    }
  }
}

