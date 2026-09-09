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
    allocation_date: Optional[str] = None
    description: Optional[str] = None

class BudgetAllocationCreate(BudgetAllocationBase):
    project_id: str

class BudgetAllocationUpdate(BaseModel):
    category_id: Optional[str] = None
    allocated_amount: Optional[float] = None
    allocation_date: Optional[str] = None
    description: Optional[str] = None

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

class ExpenseRecordUpdate(BaseModel):
    category_id: Optional[str] = None
    description: Optional[str] = None
    amount: Optional[float] = None
    expense_date: Optional[datetime] = None
    status: Optional[str] = None

class ExpenseRecordResponse(ExpenseRecordBase):
    id: str
    project_id: str
    recorded_by_id: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    category: Optional[BudgetCategoryResponse] = None

    class Config:
        from_attributes = True


class CostEstimateBase(BaseModel):
    category_id: str
    activity: str
    description: Optional[str] = None
    estimated_amount: float

class CostEstimateCreate(CostEstimateBase):
    pass

class CostEstimateUpdate(BaseModel):
    category_id: Optional[str] = None
    activity: Optional[str] = None
    description: Optional[str] = None
    estimated_amount: Optional[float] = None

class CostEstimateResponse(CostEstimateBase):
    id: str
    project_id: str
    created_by_id: Optional[str] = None
    created_at: datetime
    updated_at: datetime

    category: Optional[BudgetCategoryResponse] = None

    class Config:
        from_attributes = True


class PlannedBudgetUpdate(BaseModel):
    total_budget: float


class ProjectBudgetSummary(BaseModel):
    project_id: str
    total_budget: float
    total_allocated: float
    total_spent: float
    total_estimated: float = 0.0
    remaining_budget: float
    burn_rate: float
    allocations: List[BudgetAllocationResponse]
    expenses: List[ExpenseRecordResponse]
    cost_estimates: List[CostEstimateResponse] = []
    
    # Optional breakdowns
    labor_costs: float = 0.0
    material_costs: float = 0.0
    equipment_costs: float = 0.0
    other_costs: float = 0.0

    class Config:
        from_attributes = True
