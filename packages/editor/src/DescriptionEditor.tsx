import React from 'react';
import { Color } from '@tiptap/extension-color';
import { Heading } from '@tiptap/extension-heading';
import { Link } from '@tiptap/extension-link';
import { ListItem } from '@tiptap/extension-list-item';
import OrderedList from '@tiptap/extension-ordered-list';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import { TextStyle } from '@tiptap/extension-text-style';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Control, Controller } from 'react-hook-form';

import { Icon } from '@cubik/ui';
import { cn } from '@cubik/ui/lib/utils';

interface Props {
  content: string;
  name: string;
  control: Control<any, any>;
  onUpdate: (data: string) => void;
}
export const DescriptionEditor = ({
  content,
  control,
  name,
  onUpdate,
}: Props) => {
  const editor = useEditor({
    content: content,
    extensions: [
      Underline,
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      TextStyle.configure(),
      Link.configure({
        openOnClick: false,
      }),
      OrderedList,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      StarterKit.configure({
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      Heading.configure({
        HTMLAttributes: {
          levels: [1, 2],
        },
      }),
    ],
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onUpdate(html);
    },
    editorProps: {
      attributes: {},
    },
  });

  return (
    <div className="bg-[var(--form-input-surface-default)] rounded-lg border border-[var(--form-input-border-default)]">
      <div className="pointer-events-auto flex justify-between items-center border-b border-[var(--button-outline-border-default)]">
        <div
          onClick={() => editor?.chain().toggleBold().run()}
          className={cn(
            editor?.isActive('bold')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="bold" />
        </div>
        <div
          onClick={() =>
            editor
              ?.chain()
              .toggleHeading({
                level: 1,
              })
              .run()
          }
          className={cn(
            editor?.isActive('heading', { level: 1 })
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="headingH1" />
        </div>
        <div
          onClick={() =>
            editor
              ?.chain()
              .toggleHeading({
                level: 2,
              })
              .run()
          }
          className={cn(
            editor?.isActive('heading', { level: 2 })
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="headingH2" />
        </div>
        <div
          onClick={() => editor?.chain().toggleItalic().run()}
          className={cn(
            editor?.isActive('italic')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="italic" />
        </div>
        <div
          onClick={() => editor?.chain().toggleUnderline().run()}
          className={cn(
            editor?.isActive('underline')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="underline" />
        </div>
        <div
          onClick={() => editor?.chain().focus().toggleBulletList().run()}
          className={cn(
            editor?.isActive('taskList')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="list" />
        </div>
        <div
          onClick={() => editor?.chain().focus().toggleOrderedList().run()}
          className={cn(
            editor?.isActive('numberList')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center border-r border-[var(--button-outline-border-default)]',
          )}
        >
          <Icon name="numberList" />
        </div>
        <div
          // onClick={() => editor?.chain().focus().toggleLink().run()}
          className={cn(
            editor?.isActive('link')
              ? 'bg-[var(--color-border-primary-base)]'
              : 'bg-[var(--button-secondary-outline-default)]',
            'px-3 py-2 w-full flex justify-center items-center',
          )}
        >
          <Icon name="linkSlant" />
        </div>
      </div>
      <div className="overflow-y-scroll max-h-[20rem] selection:text-">
        <Controller
          name={name}
          control={control}
          render={() => {
            return (
              <EditorContent
                style={{
                  height: '20rem',
                  overflowY: 'scroll',
                  color: 'var(--form-input-fg-default)',
                }}
                className="grid min-h-[160px] w-full rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white"
                editor={editor}
              />
            );
          }}
        />
      </div>
    </div>
  );
};
