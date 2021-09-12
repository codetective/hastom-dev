import BounceLoader from "react-spinners/BounceLoader";


const ContentLoader = () => {
    return (
        <div className="contentLoaderWrapper">
            <BounceLoader color={"#00a651"} loading={true}  size={100} />
        </div>
    )
}

export default ContentLoader
