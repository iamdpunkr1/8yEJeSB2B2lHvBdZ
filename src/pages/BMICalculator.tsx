import {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormData {
  weight: number;
  height: number;
}

const BMICalculator = () => {
  const [bmi, setBMI] = useState<number>(0.0); 
  const initialValues: FormData = {
    weight: 0.0,
    height: 0.0,
  };

  const validationSchema = Yup.object({
    weight: Yup.number().required('Weight is required').min(1, 'Must be at least 1').max(300, 'Must be at most 300'),
    height: Yup.number().required('Height is required').min(0.1, 'Must be at least 0.1').max(3, 'Must be at most 3'),
  });

  const calculateBMI = (values: FormData) => {
    const bmi = values.weight / (values.height * values.height);
    return parseFloat(bmi.toFixed(1));
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return 'Healthy weight';
    } else {
      return 'Overweight';
    }
  };

  return (
    <div className="bmi-calculator max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            const bmi = calculateBMI(values);
            setBMI(bmi);
        }}
      >
        <Form>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700">Weight (kg):</label>
            <Field type="number" id="weight" name="weight" className="form-input w-full" />
            <ErrorMessage name="weight" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700">Height (m):</label>
            <Field type="number" id="height" name="height" className="form-input w-full" />
            <ErrorMessage name="height" component="div" className="text-red-500 text-sm" />
          </div>
          <div className="mb-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              Calculate BMI
            </button>
          </div>
          
          {bmi > 0 && 
                    <div>
                    <strong>Your BMI:</strong> {bmi}
                    <br />
                    <strong>Category:</strong> {getBMICategory(bmi)}
                  </div>
          }

        </Form>
      </Formik>
    </div>
  );
};

export default BMICalculator;
