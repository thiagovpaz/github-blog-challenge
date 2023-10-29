import { useEffect, useState } from 'react';
import { FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useDebounce } from 'use-debounce';

import { UserType } from '@/types/user';
import { PostType } from '@/types/post';
import { github } from '@/services/github';

import { Card } from '@/components/Card';
import { Input } from '@/components/Input';

const Home = () => {
  const [user, setUser] = useState<UserType | null>(null);
  const [posts, setPosts] = useState<Partial<PostType>[]>([]);

  const [text, setText] = useState('');
  const [value] = useDebounce(text, 1000);

  useEffect(() => {
    github
      .get<UserType>(`/users/${import.meta.env.VITE_GITHUB_USERNAME}`)
      .then((response) => {
        setUser(response.data);
      });
  }, []);

  useEffect(() => {
    github
      .get(
        `/search/issues?q=${value} repo:${
          import.meta.env.VITE_GITHUB_REPOSITORY
        }`,
      )
      .then((response) => {
        setPosts(response.data.items);
      });
  }, [value]);

  return (
    <div className="relative mx-auto h-full max-w-[1240px]">
      <div className="absolute -top-16 left-0 right-0 flex h-[215px] w-full items-center justify-between gap-8 rounded-xl bg-base-profile px-10 py-8 shadow-lg">
        <img
          src={user?.avatar_url || 'https://i.pravatar.cc/300'}
          alt="User Profile Avatar"
          className="h-[148px] w-[148px] rounded-md"
        />
        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <h3 className="text-2xl text-base-title">{user?.name}</h3>
            {user?.html_url && (
              <a
                target="_blank"
                href={user?.html_url}
                className="flex items-center justify-center gap-2 text-xs font-bold uppercase leading-5 text-blue hover:underline"
              >
                Github <FaExternalLinkAlt />
              </a>
            )}
          </div>
          <p className="text-base-text">{user?.bio}</p>
          <div className="flex gap-10">
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaGithub className="fill-base-label" size="18px" />
              {user?.login || '-'}
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaBuilding className="fill-base-label" size="18px" />
              {user?.company || '-'}
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaUserGroup className="fill-base-label" size="18px" />
              {user?.followers || 0} seguidores
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[200px]">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-lg font-bold text-base-subtitle">
              Publicações
            </span>
            <span className="font-normal text-base-span">
              {posts.length || 0} publicaçõe
              {posts.length > 1 || posts.length === 0 ? 's' : ''}
            </span>
          </div>

          <Input
            placeholder="Buscar conteúdo"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <div className="mt-12 grid w-full grid-cols-2 gap-8 pb-8">
          {posts.map(({ id, ...post }) => (
            <Card key={`k-${id}`} to={`/post/${post.number}`} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="flex items-center justify-center text-base-text">
            Sem posts!
          </div>
        )}
      </div>
    </div>
  );
};

export { Home };
