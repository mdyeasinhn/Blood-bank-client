import React, { useState } from 'react';
import AddBlogModal from './AddBlogModal';

const ContentManagement = () => {
    const [isOpen, setIsOpen] = useState(false);
    const closeModal = () => {
        setIsOpen(false)
    }
    return (
        <div>
            {/* add blog btn */}
            <div className='text-end'>
                <button className='btn btn-sm ' onClick={() => setIsOpen(true)}>Add Blog</button>
                <AddBlogModal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal}/>
            </div>



        </div>
    );
};

export default ContentManagement;