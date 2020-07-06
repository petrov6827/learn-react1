import React from 'react';
import s from './ProfileStatus.module.scss';
import { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status); //callback который передаст статус в пропсы
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value); //сетаем локальный стейт
  };

  return (
    <div>
      {!editMode && (
        <div className={s.profile__status}>
          <span onDoubleClick={activateEditMode}>{status || '-----'}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
