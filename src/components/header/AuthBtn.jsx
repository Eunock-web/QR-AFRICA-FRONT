import Button from "../utils/Button"

function AuthBtn(props) {
    return (
        <div>
            <Button className="bg-gradient-accent hover:shadow-accent btn-sm"> { props.children } </Button>
        </div>
    )
}

export default AuthBtn