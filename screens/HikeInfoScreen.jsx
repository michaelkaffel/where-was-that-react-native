import RenderHike from "../features/hikes/RenderHike";

const HikeInfoScreen = ({ route }) => {
    const { hikeId } = route.params;
    return <RenderHike hikeId={hikeId} />
};

export default HikeInfoScreen;