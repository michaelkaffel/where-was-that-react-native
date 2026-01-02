import RenderOverlook from "../features/overlooks/RenderOverlook";

const OverlookInfoScreen = ({ route }) => {
    const { overlook } = route.params;
    return <RenderOverlook overlook={overlook} />;
}

export default OverlookInfoScreen;