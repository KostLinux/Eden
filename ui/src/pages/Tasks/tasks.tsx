import { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // replace '#root' with the id of your app's root element

function Tasks () {
    const [showForm, setShowForm] = useState(false);

    return (
        <div className="p-6 lg:ml-72 lg:mt-24">
            <div className="items-center mb-4">
                <h1 className="text-3xl text-black font-bold">Tasks</h1>
                <div className="flex items-center justify-end">
                    <input className="mr-4 rounded py-2 px-4" type="text" placeholder="Search tasks" />
                    <button onClick={() => setShowForm(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Add Task
                    </button>
                </div>
            </div>
            <Modal isOpen={showForm} onRequestClose={() => setShowForm(false)}>
                <form>
                    <input className="mr-4 rounded py-2 px-4 block" type="text" placeholder="Title" />
                    <textarea className="mr-4 rounded py-2 px-4 block" placeholder="Description"></textarea>
                    <input className="mr-4 rounded py-2 px-4 block" type="date" />
                </form>
            </Modal>
            <hr />
            <p className="text-white">This is the tasks page.</p>
        </div>
    );
}
export default Tasks;