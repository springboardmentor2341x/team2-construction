import pytest
from httpx import AsyncClient

@pytest.mark.asyncio
async def test_get_admin_dashboard_unauthorized(client: AsyncClient):
    response = await client.get("/dashboard/admin")
    assert response.status_code == 401

@pytest.mark.asyncio
async def test_get_admin_dashboard_forbidden(client: AsyncClient, pm_token_headers: dict):
    response = await client.get("/dashboard/admin", headers=pm_token_headers)
    assert response.status_code == 403

@pytest.mark.asyncio
async def test_get_admin_dashboard_success(client: AsyncClient, admin_token_headers: dict, setup_test_projects):
    response = await client.get("/dashboard/admin", headers=admin_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "projects" in data["data"]
    assert "budget" in data["data"]
    assert "progress" in data["data"]

@pytest.mark.asyncio
async def test_get_pm_dashboard_unauthorized(client: AsyncClient):
    response = await client.get("/dashboard/project-manager")
    assert response.status_code == 401

@pytest.mark.asyncio
async def test_get_pm_dashboard_success(client: AsyncClient, pm_token_headers: dict, setup_test_projects):
    response = await client.get("/dashboard/project-manager", headers=pm_token_headers)
    assert response.status_code == 200
    data = response.json()
    assert data["success"] is True
    assert "projects" in data["data"]
    assert "budget" in data["data"]
    assert "progress" in data["data"]
