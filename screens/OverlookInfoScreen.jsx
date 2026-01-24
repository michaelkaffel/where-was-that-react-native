import RenderOverlook from "../features/overlooks/RenderOverlook";

const OverlookInfoScreen = ({ route }) => {
    const { overlookId } = route.params;
    return <RenderOverlook overlookId={overlookId} />;
}

export default OverlookInfoScreen;