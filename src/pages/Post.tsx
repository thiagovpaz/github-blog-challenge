import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
} from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { PostType } from '@/types/post';
import { github } from '@/services/github';

const Post = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [post, setPost] = useState<PostType | null>(null);

  useEffect(() => {
    github
      .get(`/repos/${import.meta.env.VITE_GITHUB_REPOSITORY}/issues/${id}`)
      .then((response) => {
        setPost(response.data);
      });
  }, [id]);

  return (
    <div className="relative mx-auto h-full max-w-[1240px]">
      <div className="absolute -top-16 left-0 right-0 flex h-[165px] items-center justify-between gap-8 rounded-xl bg-base-profile px-10 py-8 shadow-lg">
        <div className="flex h-full flex-1 flex-col justify-between">
          <div className="flex justify-between">
            <a
              onClick={() => navigate(-1)}
              className="flex cursor-pointer items-center justify-between gap-2 text-xs font-bold uppercase text-blue hover:underline "
            >
              <FaChevronLeft />
              Voltar
            </a>
            <a
              target="_blank"
              href={post?.html_url}
              className="flex items-center justify-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
            >
              Ver no Github <FaExternalLinkAlt />
            </a>
          </div>
          <h2 className="text-2xl text-base-title">{post?.title}</h2>
          <div className="flex gap-10">
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaGithub className="fill-base-label" size="18px" />
              {post?.user.login}
            </div>
            <div
              className="flex items-center justify-center gap-2 font-normal text-base-subtitle"
              title={
                post?.created_at &&
                format(new Date(post.created_at), 'dd/MM/yyyy hh:mm')
              }
            >
              <FaCalendarDay className="fill-base-label" size="18px" />
              {post?.created_at &&
                formatDistanceToNow(new Date(post.created_at), {
                  locale: ptBR,
                })}
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaComment className="fill-base-label" size="18px" />
              {post?.comments || 0} comentário
              {(post?.comments && post.comments > 1) || post?.comments === 0
                ? 's'
                : ''}
            </div>
          </div>
        </div>
      </div>

      {post?.body && (
        <div
          className="px-8 pt-[120px] text-base-text"
          dangerouslySetInnerHTML={{
            __html: post.body.replace(/\n/g, '<br/>'),
          }}
        />
      )}
    </div>
  );
};

export { Post };
