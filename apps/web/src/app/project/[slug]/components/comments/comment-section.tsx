"use client";
import { getComments, makeComment } from "@/app/project/[slug]/actions";
import Loading from "@/app/project/[slug]/components/loading";
import dayjs from "@cubik/dayjs";
import { Text, AvatarLabelGroup, Button, InputContainer, InputField, InputFieldContainer, InputRightElement } from "@cubik/ui"
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer'
import { toast } from "sonner";

export interface Props {
    projectId: string;
    user: {
        username: string;
        profilePicture: string;
        id: string;
    };
}

const CommentSection = ({ user, projectId }: Props) => {
    const [commentBoxState, setCommentBoxState] = useState<string>('');
    // const [page, setPage] = useState(1);
    const [ref, inView] = useInView();
    const [loadingState, setLoadingState] = useState(false);
    console.log('cmt - ', commentBoxState);
    const cmtQuery = useInfiniteQuery({
        queryKey: ['comments', { projectId, page: 1 }],
        queryFn: ({ pageParam = 1 }) => getComments({ projectId, page: pageParam }),
        getNextPageParam: (_, pages) => pages.length + 1,
        initialPageParam: 1,
    })

    console.log('cmtQuery - ', cmtQuery);

    // const loadMoreComments = useCallback(async () => {
    //     const next = page + 1
    //     const cmts = await getComments({ projectId, page: next })
    //     if (cmts?.length) {
    //         setPage(next)
    //         setCommentState((prev) => [
    //             ...(prev?.length ? prev : []),
    //             ...cmts
    //         ])
    //     }
    // }, [page, projectId])

    useEffect(() => {
        if (inView && cmtQuery.hasNextPage) {
            try {
                cmtQuery.fetchNextPage();
            } catch (error: Error | any) {
                toast.error(error);
            }
        }
    }, [cmtQuery, inView])

    const _cmts = cmtQuery.data?.pages?.flatMap((page) => page)

    const onSubmit = async () => {
        const commentInputBox = document.getElementById('comment-inputbox') as HTMLInputElement;
        try {
            const comment = commentBoxState.trim();
            setCommentBoxState('');
            setLoadingState(true);
            commentInputBox.value = '';
            const res = await makeComment(comment, projectId);
            if (res) {
                toast.success("Comment posted successfully.");
                cmtQuery.refetch();
                setLoadingState(false)
            } else {
                toast.error("Something went wrong.");
            }
        } catch (error: Error | any) {
            toast.error(error.message);
            setLoadingState(false);
            commentInputBox.value = '';
        }
    }

    return (
        <div>
            <Text color="primary" className="bold text-lg">Comments</Text>
            <InputContainer inputvariant='md'>
                <InputFieldContainer isDisabled={false} variant="md">
                    <InputField
                        id="comment-inputbox"
                        name="comment"
                        placeholder="What do you want to share"
                        type="text"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCommentBoxState(e.target.value)}
                    />
                    <InputRightElement>
                        <Button type="submit" isLoading={loadingState} onClick={onSubmit} size="sm">Post</Button>
                    </InputRightElement>
                </InputFieldContainer>
            </InputContainer>
            <div className='m-2 flex flex-col gap-4'>
                {_cmts?.map((comment, idx) => {
                    return <AvatarLabelGroup key={idx}
                        avatarSrc={comment.user.profilePicture}
                        shape="circle"
                        title={`@${comment.user.username}`}
                        description={comment.comment}
                        subtitle={` ${dayjs(comment.createdAt).fromNow()}`}
                        size="sm"
                    />
                })}
                <Loading hidden={!cmtQuery.hasNextPage} ref={ref} />
            </div>
        </div>
    )
}

export default CommentSection;