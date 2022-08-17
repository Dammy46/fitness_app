import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { exerciseOption, youtubeOption, fetchData } from '../utils/fetchData';
import Info from '../components/Info.jsx';
import ExerciseVideos from '../components/ExerciseVideos';
import RelatedExercises from '../components/RelatedExercises';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [target, setTarget] = useState([])
  const [equipment, setEquipment] = useState([])
  const { id } = useParams();

  useEffect(() => {
    const exercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl =
        'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOption
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOption
      );
      setExerciseVideos(exerciseVideoData.contents);
      const targetMuscleData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOption
      );
      setTarget(targetMuscleData);
      const equipmentData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`,
        exerciseOption
      );
      setEquipment(equipmentData)
    };
    exercisesData();
  }, [id]);

  return (
    <Box>
      <Info exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <RelatedExercises target={target} equipment={equipment}/>
    </Box>
  );
};

export default ExerciseDetail;
