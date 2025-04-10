import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearValues, handleChange } from '../../features/job/jobSlice';

const AddJob = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please fill out all fields');
      return;
    }
  };

  const handleJobInput = (e) => {
    const { name, value } = e.target;
    dispatch(handleChange({ name, value }));
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          <FormRow
            type='text'
            name='position'
            value={position}
            labelText='position'
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='company'
            value={company}
            labelText='company'
            handleChange={handleJobInput}
          />
          <FormRow
            type='text'
            name='jobLocation'
            value={jobLocation}
            labelText='job location'
            handleChange={handleJobInput}
          />
          <FormRowSelect
            name='status'
            labelText='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={status}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
