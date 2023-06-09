import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMissions } from '../../features/missionsSlice';
import '../../Assets/css/missionsList.css';
import Missions from './Mission';

function MissionsList() {
  const dispatch = useDispatch();
  const missions = useSelector((store) => store.mission.missions);
  useEffect(() => {
    if (missions.length === 0) {
      dispatch(getMissions());
    }
  }, [dispatch, missions]);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Missions</th>
            <th>Description</th>
            <th>Status</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {missions?.map((mission) => (
            <Missions
              key={mission.mission_id}
              id={mission.mission_id}
              title={mission.mission_name}
              description={mission.description}
              reserved={mission.reserved}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MissionsList;
