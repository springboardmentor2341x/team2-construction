import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-projects',
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  showForm = false;
  showDetails = false;
  showDeleteConfirmation = false;

  selectedProject: any = null;
  projectToDelete: any = null;

  searchText = '';

  projects = [
    {
      name: 'Metro Construction',
      manager: 'Rahul Sharma',
      startDate: '2026-01-15',
      endDate: '2026-12-30',
      status: 'In Progress'
    },
    {
      name: 'Smart City Project',
      manager: 'Priya Reddy',
      startDate: '2026-03-01',
      endDate: '2027-02-28',
      status: 'Planning'
    },
    {
      name: 'Highway Development',
      manager: 'Amit Kumar',
      startDate: '2026-02-10',
      endDate: '2027-01-15',
      status: 'In Progress'
    }
  ];

  newProject = {
    name: '',
    manager: '',
    startDate: '',
    endDate: '',
    status: 'Planning'
  };

  get filteredProjects() {
    return this.projects.filter(project =>
      project.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      project.manager.toLowerCase().includes(this.searchText.toLowerCase()) ||
      project.status.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  get totalProjects() {
    return this.projects.length;
  }

  get activeProjects() {
    return this.projects.filter(
      project => project.status === 'In Progress'
    ).length;
  }

  get planningProjects() {
    return this.projects.filter(
      project => project.status === 'Planning'
    ).length;
  }

  addProject() {
    this.showForm = true;
  }

  saveProject() {
    if (
      this.newProject.name.trim() !== '' &&
      this.newProject.manager.trim() !== '' &&
      this.newProject.startDate !== '' &&
      this.newProject.endDate !== ''
    ) {
      this.projects.push({
        name: this.newProject.name,
        manager: this.newProject.manager,
        startDate: this.newProject.startDate,
        endDate: this.newProject.endDate,
        status: this.newProject.status
      });

      this.resetForm();
      this.showForm = false;
    } else {
      alert('Please fill in all project details.');
    }
  }

  cancelProject() {
    this.resetForm();
    this.showForm = false;
  }

  resetForm() {
    this.newProject = {
      name: '',
      manager: '',
      startDate: '',
      endDate: '',
      status: 'Planning'
    };
  }

  viewProject(project: any) {
    this.selectedProject = project;
    this.showDetails = true;
  }

  closeDetails() {
    this.showDetails = false;
    this.selectedProject = null;
  }

  deleteProject(project: any) {
    this.projectToDelete = project;
    this.showDeleteConfirmation = true;
  }

  confirmDelete() {
    if (this.projectToDelete) {
      this.projects = this.projects.filter(
        project => project !== this.projectToDelete
      );
    }

    this.cancelDelete();
  }

  cancelDelete() {
    this.showDeleteConfirmation = false;
    this.projectToDelete = null;
  }

}