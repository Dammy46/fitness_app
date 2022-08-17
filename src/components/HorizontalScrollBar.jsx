import React, {useContext} from 'react'
import { Box, Typography } from '@mui/material'
import BodyPartCategory from './BodyPartCategory';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import Loader from './Loader'
import ExecerciseCard from './ExerciseCard'


   const LeftArrow = () => {
     const { scrollPrev } = useContext(VisibilityContext);
     return (
       <Typography onClick={() => scrollPrev()} className="right-arrow" sx={{fontSize: '2rem'}}>
         {' <'}
       </Typography>
     );
   };
   const RightArrow = () => {
     const { scrollNext } = useContext(VisibilityContext);
     return (
       <Typography onClick={() => scrollNext()} className="left-arrow" sx={{fontSize: '2rem'}}>
         {'>'}
       </Typography>
     );
   };

const HorizontalScrollBar = ({data, bodyParts, setBodyParts, isBodyPart}) => {

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {!data.length ? (
        <Loader />
      ) : (
        data.map((item) => (
          <Box
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            m="0 40px"
          >
            {isBodyPart ? (
              <BodyPartCategory
                item={item}
                bodyPart={bodyParts}
                setBodyPart={setBodyParts}
              />
            ) : (
              <ExecerciseCard exercise={item} />
            )}
          </Box>
        ))
      )}
    </ScrollMenu>
  );
}

export default HorizontalScrollBar