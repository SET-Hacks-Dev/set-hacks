type AnchorProps = {
    i: string;
}

const Anchor = ({i}: AnchorProps) => {
    return <div id={i} key={i}/>
}

export default Anchor;