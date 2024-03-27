import React from 'react'
import style from '../css/UserPendiente.module.css'
import { UserPendienteTable } from './UserPendienteTable'
export const UserPendiente = () => {
  return (
    <div className={style.containerU}>
        <h2>Usuarios por verificar</h2>
        <div className={style.containerTable}>
            <UserPendienteTable />
        </div>
    </div>
  )
}
