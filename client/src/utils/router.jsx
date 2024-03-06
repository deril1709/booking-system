import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import IndexPage from '../pages/IndexPage'
import LoginPage from '../pages/LoginPage'
import Layout from '../Layout'
import RegisterPage from '../pages/RegisterPage'
import Lapangan from '../pages/Lapangan'
import SingleField from '../pages/SingleField'
import AccountPage from '../pages/AccountPage'
import AdminDashboard from '../pages/admin/AdminDashboard'
import AdminFormlapangan from '../pages/admin/AdminFormlapangan'
import AdminBooking from '../pages/admin/AdminBooking'
import { UserContext } from '../UserContext'


function Router() {
    const { ready, user } = useContext(UserContext)
    return (
        <>
            {
                !ready ? (
                    <p>loading...</p>
                ) : (
                    <Routes>
                        {!user && (
                            <>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<IndexPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                    <Route path="/list" element={<Lapangan />} />
                                    {/* <Route path="/field/:fieldId" element={<SingleField />} /> */}
                                    {/* <Route path="/account/:subpage?" element={<AccountPage />} /> */}
                                    {/* <Route path="/account/:subpage/:action" element={<AccountPage />} /> */}
                                </Route>
                                <Route element={<Layout />}><Route path='/login' element={<LoginPage />} /></Route>
                            </>
                        )}

                        {(user) && user.role === "RENTEE" && (
                            <>
                                <Route path="/" element={<Layout />}>
                                    <Route index element={<IndexPage />} />
                                    <Route path="/register" element={<RegisterPage />} />
                                    <Route path="/list" element={<Lapangan />} />
                                    <Route path="/field/:fieldId" element={<SingleField />} />
                                    <Route path="/account/:subpage?" element={<AccountPage />} />
                                    <Route path="/account/:subpage/:action" element={<AccountPage />} />
                                </Route>
                            </>
                        )}

                        {user && user.role === "ADMIN" && (
                            <>
                                <Route path='/' >
                                    <Route index element={<AdminDashboard />} />
                                    <Route path="/formlapangan" element={<AdminFormlapangan />} />
                                    <Route path="/booking" element={<AdminBooking />} />
                                </Route>
                            </>
                        )}
                    </Routes>
                )
            }
        </>


    )
}

export default Router