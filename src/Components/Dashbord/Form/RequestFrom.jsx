import useAuth from "../../../hooks/useAuth"

const RequestFrom = ({ }) => {
  const { user } = useAuth();

  return (
    <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form className='w-full  p-6 '>
        <div className='grid lg:grid-cols-2 md:grid-col-1  gap-6'>

          {/* Requester Name ) */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='requesterName' className='block text-gray-600'>Requester Name</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='requesterName'
              id='requesterName'
              type='text'
              defaultValue={user?.displayName}
              readOnly
            />
          </div>

          {/* Requester Email ) */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='requesterEmail' className='block text-gray-600'>Requester Email</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='requesterEmail'
              id='requesterEmail'
              type='email'
              defaultValue={user?.email}
              readOnly
            />
          </div>

          {/* Recipient Name */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='recipientName' className='block text-gray-600'>Recipient Name</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='recipientName'
              id='recipientName'
              type='text'
              placeholder='Enter recipient name'
              required
            />
          </div>

          {/* Recipient District */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='recipientDistrict' className='block text-gray-600'>Recipient District</label>
            <select
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='recipientDistrict'
              id='recipientDistrict'
              required
            >
              <option value='' disabled selected>Select Your District</option>
              <option value='Barishal'>Barishal</option>
              <option value='Chittagong'>Chittagong</option>
              <option value='Dhaka'>Dhaka</option>
              <option value='Mymensingh'>Mymensingh</option>
              <option value='Khulna'>Khulna</option>
              <option value='Rajshahi'>Rajshahi</option>
              <option value='Rangpur'>Rangpur</option>
              <option value='Sylhet'>Sylhet</option>
              {/* Add more options here */}
            </select>
          </div>

          {/* Recipient Upazila */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='recipientUpazila' className='block text-gray-600'>Recipient Upazila</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='recipientUpazila'
              id='recipientUpazila'
              required
              placeholder="Enter Recipient Upazila"
            />
       
       
          </div>

          {/* Hospital Name */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='hospitalName' className='block text-gray-600'>Hospital Name</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='hospitalName'
              id='hospitalName'
              type='text'
              placeholder='Enter hospital name'
              required
            />
          </div>

          {/* Full Address */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='fullAddress' className='block text-gray-600'>Full Address</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='fullAddress'
              id='fullAddress'
              type='text'
              placeholder='Enter full address'
              required
            />
          </div>

          {/* Donation Date */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='donationDate' className='block text-gray-600'>Donation Date</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='donationDate'
              id='donationDate'
              type='date'
              required
            />
          </div>

          {/* Donation Time */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='donationTime' className='block text-gray-600'>Donation Time</label>
            <input
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='donationTime'
              id='donationTime'
              type='time'
              required
            />
          </div>

          {/* Request Message */}
          <div className='space-y-1 text-sm'>
            <label htmlFor='requestMessage' className='block text-gray-600'>Request Message</label>
            <textarea
              className='w-full px-4 py-3 text-gray-800 border border-gray-300 focus:outline-red-500 rounded-md'
              name='requestMessage'
              id='requestMessage'
              placeholder='Write your message here'
              required
            />
          </div>

        </div>

        {/* Submit Button */}
        <button
          type='submit'
          className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-red-500 hover:bg-red-600'
        >
          Create Donation Request
        </button>
      </form>
    </div>
  )
}

export default RequestFrom