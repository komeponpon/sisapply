import React, {useState} from "react";
import apiClient from "../utils/apiClient";

interface FormData {
  propertyName: string;
  propertyAddress: string;
  remarks: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    propertyName: '',
    propertyAddress:'',
    remarks: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData,[e.target.name]:e.target.value});
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await apiClient.post('/api/applications',formData);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="propertyName"
        value={formData.propertyName}
        onChange={handleChange}
        placeholder="物件名"
      />
      <input
        type="text"
        name="propetyAddress"
        value={formData.propertyAddress}
        onChange={handleChange}
        placeholder="設置場所住所"
      />
      <input
        type="text"
        name="remarks"
        value={formData.remarks}
        onChange={handleChange}
        placeholder="備考"
      />
      <button type="submit">送信</button>
    </form>
  )

}