import { useRouter } from "next/router";

const UserGetPage = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
        <h1>UserGetPage {id}</h1>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            doloremque, quidem, quisquam quisquam doloremque quidem quisquam
            doloremque.
        </p>
        </div>
    );
    }
  
    export default UserGetPage;