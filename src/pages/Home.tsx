import { useEffect, useState } from 'react';
import { FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';

import userData from '@/mocks/user';
const Home = () => {
  const [user] = useState(userData);

  useEffect(() => {
    // github.get('/users/thiagovpaz').then((response) => {
    //   console.log(response.data);
    // });
  }, []);

  return (
    <div className="relative mx-auto max-w-[1240px]">
      <div className="absolute -top-16 left-0 right-0 flex h-[215px] items-center justify-between gap-8 rounded-xl bg-base-profile px-10 py-8">
        <img
          src={user.avatar_url}
          alt="User Profile Avatar"
          className="h-[148px] w-[148px] rounded-md"
        />
        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <h3 className="text-2xl text-base-title">{user.name}</h3>
            <a
              target="_blank"
              href={user.html_url}
              className="flex items-center justify-center gap-2 font-bold uppercase text-blue hover:underline"
            >
              Github <FaExternalLinkAlt />
            </a>
          </div>
          <p className="text-base-text">{user.bio}</p>
          <div className="flex gap-10">
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaGithub className="fill-base-label" size="18px" />
              {user.login}
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaBuilding className="fill-base-label" size="18px" />
              {user.company}
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaUserGroup className="fill-base-label" size="18px" />
              {user.followers} Seguidores
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Home };
