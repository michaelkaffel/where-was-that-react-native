import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfoScreen = ({ route }) => {
    const { campsiteId } = route.params;
    return <RenderCampsite campsiteId={campsiteId}/>
};

export default CampsiteInfoScreen;