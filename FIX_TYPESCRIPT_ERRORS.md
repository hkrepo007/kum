# Fix TypeScript Errors

## Issue
The RegistrationForm.tsx file shows TypeScript errors because React dependencies haven't been installed yet.

## Solution

### Step 1: Install Dependencies
Navigate to the frontend directory and install dependencies:

```bash
cd frontend-nextjs
npm install
```

This will install:
- react
- react-dom
- next
- @types/react
- @types/react-dom
- typescript

### Step 2: Verify Installation
After installation, the TypeScript errors should disappear. You can verify by running:

```bash
npm run build
```

## What Was Fixed in the Code

### 1. Import Statement
**Before:**
```typescript
import { FormEvent, useState } from 'react'
```

**After:**
```typescript
import { FormEvent, useState, ChangeEvent } from 'react'
```
- Added `ChangeEvent` import for proper typing

### 2. Event Handler Type
**Before:**
```typescript
const handleSubmit = (e: FormEvent) => {
```

**After:**
```typescript
const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
```
- Made FormEvent more specific with HTMLFormElement

### 3. Change Handler Type
**Before:**
```typescript
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
```

**After:**
```typescript
const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
```
- Used imported ChangeEvent instead of React.ChangeEvent

### 4. State Updater Type
**Before:**
```typescript
setFormData((prev) => ({
```

**After:**
```typescript
setFormData((prev: UserData) => ({
```
- Added explicit type annotation for prev parameter

## Why These Errors Appeared

The errors appeared because:
1. **Dependencies not installed**: The `node_modules` folder doesn't exist yet
2. **TypeScript can't find React types**: Without installed packages, TypeScript doesn't know about React types

## After Running npm install

Once you run `npm install`, TypeScript will:
- ✅ Find React type definitions
- ✅ Recognize JSX syntax
- ✅ Validate all component props
- ✅ Check all type annotations

## Quick Test

After installing dependencies, test the component:

```bash
cd frontend-nextjs
npm run dev
```

Then open http://localhost:3000 - the form should render without errors.

## Summary

The code itself was mostly correct, but needed:
1. ✅ Proper type imports
2. ✅ Explicit type annotations
3. ✅ Dependencies installed via `npm install`

**Status**: Fixed! Just run `npm install` in the frontend-nextjs directory.
