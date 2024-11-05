import React, { useState } from 'react';
import axios from 'axios';

const ProjectForm: React.FC = () => {
    const [formData, setFormData] = useState({
        projectName: '',
        agreementNumber: '',
        grantType: '',
        fundingAmount: '',
        possibleResourceConcerns: '',
        projectBackground: '',
        awardeeOrganizationName: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://your-api-id.execute-api.region.amazonaws.com/prod/store', formData);
            console.log('Data stored successfully:', response.data);
        } catch (error) {
            console.error('Error storing data:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Project Name</label>
                <input type="text" name="projectName" value={formData.projectName} onChange={handleChange} />
            </div>
            <div>
                <label>Agreement Number</label>
                <input type="text" name="agreementNumber" value={formData.agreementNumber} onChange={handleChange} />
            </div>
            <div>
                <label>Grant Type</label>
                <input type="text" name="grantType" value={formData.grantType} onChange={handleChange} />
            </div>
            <div>
                <label>Funding Amount</label>
                <input type="text" name="fundingAmount" value={formData.fundingAmount} onChange={handleChange} />
            </div>
            <div>
                <label>Possible Resource Concerns</label>
                <input type="text" name="possibleResourceConcerns" value={formData.possibleResourceConcerns} onChange={handleChange} />
            </div>
            <div>
                <label>Project Background (Two Sentence Summary)</label>
                <textarea name="projectBackground" value={formData.projectBackground} onChange={handleChange} />
            </div>
            <div>
                <label>Awardee Organization Name</label>
                <input type="text" name="awardeeOrganizationName" value={formData.awardeeOrganizationName} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ProjectForm;