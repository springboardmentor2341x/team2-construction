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

  newExpense = {
    category_id: '',
    description: '',
    amount: 0,
    expense_date: new Date().toISOString().split('T')[0]
  };

  newAllocation = {
    category_id: '',
    allocated_amount: 0
  };

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
      this.budgetService.getProjectBudgetSummary(this.selectedProjectId()).subscribe();
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
  }

  submitExpense() {
    if (this.selectedProjectId() && this.newExpense.category_id && this.newExpense.amount > 0) {
      this.budgetService.createExpense(this.selectedProjectId(), this.newExpense).subscribe(() => {
        this.closeExpenseModal();
        this.newExpense = { category_id: '', description: '', amount: 0, expense_date: new Date().toISOString().split('T')[0] };
      });
    }
  }

  submitAllocation() {
    if (this.selectedProjectId() && this.newAllocation.category_id && this.newAllocation.allocated_amount > 0) {
      this.budgetService.createBudgetAllocation(this.selectedProjectId(), this.newAllocation).subscribe(() => {
        this.closeAllocationModal();
        this.newAllocation = { category_id: '', allocated_amount: 0 };
      });
    }
  }
}
