import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { addVehicle, getProfile } from '../services/vehicles';
import { Vehicle, VEHICLE_COLORS, MAX_VEHICLES } from '../types';

const MAKES_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=json';

const AddVehiclePage: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [plate, setPlate] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [color, setColor] = useState<string>('');
  const [makes, setMakes] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [vehicleCount, setVehicleCount] = useState(0);

  useEffect(() => {
    fetch(MAKES_URL)
      .then((r) => r.json())
      .then((d) => setMakes(d.Results.map((m: { MakeName: string }) => m.MakeName).sort()))
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!user) return;
    getProfile(user.uid).then((p) => setVehicleCount(p?.vehicles?.length ?? 0));
  }, [user]);

  useEffect(() => {
    if (!make) { setModels([]); return; }
    fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${encodeURIComponent(make)}?format=json`)
      .then((r) => r.json())
      .then((d) => setModels(d.Results.map((m: { Model_Name: string }) => m.Model_Name).sort()))
      .catch(() => {});
  }, [make]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setError('');
    setLoading(true);
    try {
      const vehicle: Vehicle = {
        id: `${user.uid}_${Date.now()}`,
        licensePlate: plate,
        make,
        model,
        color,
      };
      await addVehicle(user.uid, vehicle);
      navigate('/profile');
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Failed to add vehicle');
    } finally {
      setLoading(false);
    }
  };

  if (vehicleCount >= MAX_VEHICLES) {
    return (
      <div className="page">
        <h1 className="page-title">Add Vehicle</h1>
        <p className="error-text">You have reached the maximum of {MAX_VEHICLES} vehicles.</p>
        <button className="btn-secondary" onClick={() => navigate('/profile')}>Back to Profile</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Add Vehicle</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="plate">License Plate</label>
          <input
            id="plate"
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value.toUpperCase())}
            placeholder="ABC-1234"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="make">Make</label>
          <select id="make" value={make} onChange={(e) => setMake(e.target.value)} required>
            <option value="">Select make…</option>
            {makes.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <select id="model" value={model} onChange={(e) => setModel(e.target.value)} required disabled={!make}>
            <option value="">Select model…</option>
            {models.map((m) => <option key={m} value={m}>{m}</option>)}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="color">Color</label>
          <select id="color" value={color} onChange={(e) => setColor(e.target.value)}>
            {VEHICLE_COLORS.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
        </div>
        {error && <p className="error-text" role="alert">{error}</p>}
        <button className="btn-primary" type="submit" disabled={loading || !plate || !make || !model}>
          {loading ? 'Adding…' : 'Add Vehicle'}
        </button>
      </form>
    </div>
  );
};

export default AddVehiclePage;
