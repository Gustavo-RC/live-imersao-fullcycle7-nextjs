import axios from "axios";
import { GetServerSideProps, NextPage } from "next";

type User = {
    name: string;
}

type UserPageProps = {
    users: User[];
}

const url = "https://jsonplaceholder.typicode.com/users";

const Index: NextPage<UserPageProps> = (props) => {
const { users } = props;

  return (
      <div>
      <h1>Index </h1>
      <div>
        <ul>
            {users.map((user: any, key) => (
                <li key={key}>{user.name}</li>
            ))}
        </ul>
      </div>
      
      </div>
  );
  };

  export default Index;

  export const getServerSideProps: GetServerSideProps = async () => {
    
    const {data} = await axios.get(url);
    const users = data;

    return{
        props: {
            users: data,
    },
};

};