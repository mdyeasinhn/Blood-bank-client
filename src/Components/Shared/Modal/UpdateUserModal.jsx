import PropTypes from 'prop-types';
import { Fragment, useState } from 'react';
import {
  Dialog,
  Listbox,
  Transition,
} from '@headlessui/react';
import { BsCheckLg } from 'react-icons/bs';
import { AiOutlineDown } from 'react-icons/ai';
import useRole from '../../../hooks/useRole';

const roles = ['volunteer', 'donor', 'admin'];

const UpdateUserModal = ({ setIsOpen, isOpen, modalHandler, user }) => {
  const [selected, setSelected] = useState(user.role); // Initialize with user's current role
  const [role] = useRole()

  console.log('option select', selected);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className='w-full h-56 max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title
                  as='h3'
                  className='text-lg font-medium text-center leading-6 text-gray-900'
                >
                  Update User Role
                </Dialog.Title>

                <div className='mt-4 w-full'>
                  <select value={role} onChange={(e)=>setSelected(e.target.value)}   className='w-full px-2 py-3 text-gray-800 border border-gray-300 rounded-md'>
                    {

                      roles.map(role =>(
                        <option  value={role}>{role}</option>
                      ))
                    }
                  </select>
                </div>

                <hr className='mt-10 ' />

                <div className='flex mt-2 justify-center gap-5'>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none'
                    onClick={() => modalHandler(selected)}
                  >
                    Update
                  </button>
                  <button
                    type='button'
                    className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none'
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

UpdateUserModal.propTypes = {
  user: PropTypes.object.isRequired,
  modalHandler: PropTypes.func.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default UpdateUserModal;
