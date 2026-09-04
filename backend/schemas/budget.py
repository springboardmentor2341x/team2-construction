from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime

class BudgetCategoryBase(BaseModel):
    name: str
    description: Optional[str] = None

class BudgetCategoryCreate(BudgetCategoryBase):
    pass

class BudgetCategoryResponse(BudgetCategoryBase):
    id: str
    created_at: datetime

    class Config:
        from_attributes = True


class BudgetAllocationBase(BaseModel):
    category_id: str
    allocated_amount: float

class BudgetAllocationCreate(BudgetAllocationBase):
    project_id: str

class BudgetAllocationResponse(BudgetAllocationBase):
    id: str
    project_id: str
    created_at: datetime
    updated_at: datetime
    
    category: Optional[BudgetCategoryResponse] = None

    class Config:
        from_attributes = True


class ExpenseRecordBase(BaseModel):
    category_id: str
    description: str
    amount: float
    expense_date: datetime
    status: str = "Approved"

class ExpenseRecordCreate(ExpenseRecordBase):
    project_id: str

class ExpenseRecordResponse(ExpenseRecordBase):
    id: str
    project_id: str
    recorded_by_id: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    category: Optional[BudgetCategoryResponse] = None

    class Config:
        from_attributes = True


class ProjectBudgetSummary(BaseModel):
    project_id: str
    total_budget: float
    total_allocated: float
    total_spent: float
    remaining_budget: float
    burn_rate: float
    allocations: List[BudgetAllocationResponse]
    expenses: List[ExpenseRecordResponse]
    
    # Optional breakdowns
    labor_costs: float = 0.0
    material_costs: float = 0.0
    equipment_costs: float = 0.0
    other_costs: float = 0.0

    class Config:
        from_attributes = True
