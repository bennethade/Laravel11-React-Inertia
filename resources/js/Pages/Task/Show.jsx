import { TASK_STATUS_TEXT_MAP, TASK_STATUS_CLASS_MAP, TASK_PRIORITY_CLASS_MAP, TASK_PRIORITY_TEXT_MAP } from "@/constants";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";


export default function show({ auth, task }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={

                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                        {`Task  "${task.name}"`}
                    </h2>

                    <Link href={route('task.edit', task.id)} className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Task  " ${task.name}"`} />


            {/* <pre>{JSON.stringify(task )}</pre> USED FOR DEBURGING */}
            {/* TO RESOLVE IT, I WENT TO TASKRESOURCE FILE AND ADDED $WRAP BECAUSE THE TASK NAME WAS NOT SHOWING */}

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div>
                            <img src={task.image_path} alt="" className="w-full h-64 object-cover" />
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div className="grid gap-1 grid-cols-2 mt-2">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Task  ID</label>
                                        <p className="mt-1" >{task.id}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Task  Name</label>
                                        <p className="mt-1" >{task.name}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Task  Status</label>
                                        <p className="mt-1">
                                            <span className={"px-2 py-1 rounded text-white " + TASK_STATUS_CLASS_MAP[task.status]}>
                                                {TASK_STATUS_TEXT_MAP[task.status]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Task  Priority</label>
                                        <p className="mt-1">
                                            <span className={"px-2 py-1 rounded text-white " + TASK_PRIORITY_CLASS_MAP[task.priority]}>
                                                {TASK_PRIORITY_TEXT_MAP[task.priority]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created By</label>
                                        <p className="mt-1" >{task.createdBy.name}</p>
                                    </div>

                                </div>

                                <div>
                                    <div>
                                        <label className="font-bold text-lg">Due Date</label>
                                        <p className="mt-1" >{task.due_date}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Created Date</label>
                                        <p className="mt-1" >{task.created_at}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Updated By</label>
                                        <p className="mt-1" >{task.updatedBy.name}</p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Project Name</label>
                                        <p className="mt-1">
                                            <Link href={route('project.show', task.project.id)} className="hover:underline">
                                                {task.project.name}
                                            </Link>
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <label className="font-bold text-lg">Assigned User</label>
                                        <p className="mt-1" >{task.assignedUser.name}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-4">
                                <label className="font-bold text-lg">Task  Description</label>
                                <p className="mt-1">{task.description}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




        </AuthenticatedLayout >
    )
}