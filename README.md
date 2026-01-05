
# Admin Dashboard – Users Management (Redux Toolkit Project)

## Goal

Build a **production-grade Admin Dashboard** to deeply understand:

- Redux Toolkit fundamentals
- Async workflows with Thunks
- State ownership and architecture decisions
- Performance considerations and trade-offs

This project is designed for **learning by doing** and **interview readiness**, not UI polish.

---

## Core Features

### 1. Users List

**UI**
- Table view
- Columns:
  - User ID
  - Name
  - Email
  - Role (Admin / User)
  - Status (Active / Inactive)
  - Actions

**Functional Requirements**
- Fetch users from API
- Show loading and error states
- Efficient rendering

---

### 2. Pagination (Server-driven)

**Requirements**
- Page number
- Page size (10 / 20)
- Total count from server
- Disable pagination while loading

**Important**
- Carefully decide what belongs in Redux vs component state

---

### 3. User Actions

#### Activate / Deactivate User
- Toggle status per row
- Show per-row loading indicator
- Do not block the entire table

#### Delete User
- Confirmation required
- Optimistic UI update
- Rollback on API failure

---

### 4. Filters & Search

**Filters**
- By role (Admin / User)
- By status (Active / Inactive)

**Search**
- By name or email
- Debounced input

**Notes**
- Filters must affect API requests
- Avoid storing derived data in Redux

---

## API Contract (Mock or Real)

Example endpoints:

```
GET    /users?page=1&limit=10&role=admin&status=active&search=john
PATCH  /users/:id/status
DELETE /users/:id
```

Example response:

```json
{
  "data": [{ "id": 1, "name": "John" }],
  "total": 120
}
```

---

## State Design Guidelines

### Redux (Global State)
- Users list
- Pagination metadata
- Async status per action
- API errors

### Component (Local State)
- Modal open / close
- Selected user for deletion
- Input focus and UI-only states

> Avoid putting everything in Redux.

---

## Redux Structure (Recommended)

```
store/
 ├── index.ts
 ├── users/
 │    ├── usersSlice.ts
 │    ├── usersThunks.ts
 │    ├── usersSelectors.ts
```

---

## Mandatory Redux Toolkit Usage

- `createSlice`
- `createAsyncThunk`
- `extraReducers`
- Normalized or semi-normalized state
- Separate loading states per async action

---

## Performance Requirements

- Avoid unnecessary row re-renders
- Use memoized selectors where required
- Stable callbacks for row actions
- No inline object props for rows

---

## Edge Cases to Handle

1. Rapid pagination clicks
2. API failure during delete (rollback)
3. Multiple concurrent row actions
4. Stale data after mutation
5. Loading vs empty state distinction

---

## What NOT to Do

- No animations or UI polish focus
- No premature memoization
- No Redux for purely local UI state
- No over-engineering

---

## Definition of Done

You should be able to clearly explain:

1. Why Redux was used
2. Why Redux Toolkit was chosen
3. Why Thunks were required
4. What state remained local and why
5. What you would refactor if the app scaled 10x

---

## Optional Enhancements

- Persist pagination in URL
- Feature flags
- Role-based access (read-only users)

---

## Day 1 Milestone

- Setup Redux store
- Create users slice
- Implement `fetchUsers` thunk
- Render users table with loading and error states
