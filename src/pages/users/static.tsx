import axios from "axios";
import { GetStaticProps, NextPage } from "next";

type User = {
    name: string;
}

type UserPageProps = {
    users: User[];
    date: string;
}

const url = "https://jsonplaceholder.typicode.com/users";

const Static: NextPage<UserPageProps> = (props) => {
const { users, date } = props;

  return (
      <div>
      <h1>Static - {date}</h1>
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

  export default Static;

  export const getStaticProps: GetStaticProps = async () => {
    
    const {data} = await axios.get(url);
    const users = data;

    return{
        props: {
            users: data,
            date: new Date().getTime(),
    },
    revalidate: 10
};

};