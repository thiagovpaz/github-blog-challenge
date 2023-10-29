import { useEffect, useState } from 'react';
import {
  FaGithub,
  FaCalendarDay,
  FaComment,
  FaChevronLeft,
} from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import postData from '@/mocks/post';

const Post = () => {
  const navigate = useNavigate();

  const [post] = useState(postData);

  useEffect(() => {}, []);

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
              href="/"
              className="flex items-center justify-center gap-2 text-xs font-bold uppercase text-blue hover:underline"
            >
              Ver no Github <FaExternalLinkAlt />
            </a>
          </div>
          <h2 className="text-2xl text-base-title">
            JavaScript data types and data structures
          </h2>
          <div className="flex gap-10">
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaGithub className="fill-base-label" size="18px" />
              thiagovpaz
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaCalendarDay className="fill-base-label" size="18px" />
              Há 1 dia
            </div>
            <div className="flex items-center justify-center gap-2 font-normal text-base-subtitle">
              <FaComment className="fill-base-label" size="18px" /> 5
              comentários
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 pt-[120px] text-base-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </div>
    </div>
  );
};

export { Post };
