import React, { Suspense, use } from 'react';
import PackageListing from '../../components/PackageListing/PackageListing';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import Loader from '../../components/Shared/Loader/Loader';
import { ManageMyPackagesPromise } from '../../API/ManageMyPackagesPromise';


const ManageMyPackages = () => {

    const { user } = use(AuthContext);

    return (
        <div className=''>
            <Suspense fallback={<Loader></Loader>}>
                <PackageListing user={user}></PackageListing>
            </Suspense>
        </div>
    );
};

export default ManageMyPackages;
