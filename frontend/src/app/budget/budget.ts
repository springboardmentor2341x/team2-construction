import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './budget.html',
  styleUrl: './budget.css'
})
export class Budget {

  showForm = false;
  searchText = '';

  showViewModal = false;
  showDeleteModal = false;

  selectedBudget: any = null;

  budgets = [
    {
      project: 'Metro Construction',
      totalBudget: 2000000,
      expenses: 1400000,
      status: 'On Track'
    },
    {
      project: 'Smart City Project',
      totalBudget: 1800000,
      expenses: 1350000,
      status: 'High Usage'
    },
    {
      project: 'Highway Development',
      totalBudget: 1200000,
      expenses: 500000,
      status: 'On Track'
    }
  ];

  newBudget = {
    project: '',
    totalBudget: 0,
    expenses: 0,
    status: 'On Track'
  };

  get filteredBudgets() {
    return this.budgets.filter(budget =>
      budget.project.toLowerCase().includes(
        this.searchText.toLowerCase()
      )
    );
  }

  get totalBudget() {
    return this.budgets.reduce(
      (total, budget) => total + budget.totalBudget,
      0
    );
  }

  get totalExpenses() {
    return this.budgets.reduce(
      (total, budget) => total + budget.expenses,
      0
    );
  }

  get remainingBudget() {
    return this.totalBudget - this.totalExpenses;
  }

  addBudget() {
    this.showForm = true;
  }

  saveBudget() {

    if (
      this.newBudget.project.trim() !== '' &&
      this.newBudget.totalBudget > 0
    ) {

      this.budgets.push({
        project: this.newBudget.project,
        totalBudget: this.newBudget.totalBudget,
        expenses: this.newBudget.expenses,
        status: this.newBudget.status
      });

      this.newBudget = {
        project: '',
        totalBudget: 0,
        expenses: 0,
        status: 'On Track'
      };

      this.showForm = false;

    } else {

      alert('Please enter a project name and total budget.');

    }

  }

  cancelBudget() {

    this.showForm = false;

    this.newBudget = {
      project: '',
      totalBudget: 0,
      expenses: 0,
      status: 'On Track'
    };

  }

  viewBudget(budget: any) {

    this.selectedBudget = budget;
    this.showViewModal = true;

  }

  closeViewModal() {

    this.showViewModal = false;
    this.selectedBudget = null;

  }

  deleteBudget(budget: any) {

    this.selectedBudget = budget;
    this.showDeleteModal = true;

  }

  confirmDelete() {

    if (this.selectedBudget) {

      this.budgets = this.budgets.filter(
        budget => budget !== this.selectedBudget
      );

    }

    this.showDeleteModal = false;
    this.selectedBudget = null;

  }

  cancelDelete() {

    this.showDeleteModal = false;
    this.selectedBudget = null;

  }

}