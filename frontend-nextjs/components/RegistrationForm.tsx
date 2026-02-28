'use client'

import { FormEvent, useState, ChangeEvent } from 'react'
import { UserData } from '@/types'

interface RegistrationFormProps {
  onSubmit: (data: UserData) => void
  loading: boolean
}

const KERALA_DISTRICTS = [
  'Thiruvananthapuram',
  'Kollam',
  'Pathanamthitta',
  'Alappuzha',
  'Kottayam',
  'Idukki',
  'Ernakulam',
  'Thrissur',
  'Palakkad',
  'Malappuram',
  'Kozhikode',
  'Wayanad',
  'Kannur',
  'Kasaragod',
]

export default function RegistrationForm({ onSubmit, loading }: RegistrationFormProps) {
  const [formData, setFormData] = useState<UserData>({
    name: '',
    age: 0,
    gender: '',
    category: '',
    income: 0,
    occupation: '',
    education: '',
    district: '',
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev: UserData) => ({
      ...prev,
      [name]: name === 'age' || name === 'income' ? Number(value) : value,
    }))
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Full Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            min="1"
            max="120"
            value={formData.age || ''}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender *</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="General">General</option>
          <option value="OBC">OBC</option>
          <option value="SC">SC</option>
          <option value="ST">ST</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="income">Annual Income (₹) *</label>
        <input
          type="number"
          id="income"
          name="income"
          value={formData.income || ''}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="education">Education Level</label>
        <select
          id="education"
          name="education"
          value={formData.education}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Below 10th">Below 10th</option>
          <option value="10th Pass">10th Pass</option>
          <option value="12th Pass">12th Pass</option>
          <option value="Graduate">Graduate</option>
          <option value="Post Graduate">Post Graduate</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="district">District *</label>
        <select
          id="district"
          name="district"
          value={formData.district}
          onChange={handleChange}
          required
        >
          <option value="">Select District</option>
          {KERALA_DISTRICTS.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-primary" disabled={loading}>
        {loading ? 'Processing...' : 'Find My Schemes'}
      </button>
    </form>
  )
}
