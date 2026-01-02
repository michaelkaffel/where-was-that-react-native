import RenderHike from "../features/hikes/RenderHike";

const HikeInfoScreen = ({ route }) => {
    const { hike } = route.params;
    return <RenderHike hike={hike} />
};

export default HikeInfoScreen;