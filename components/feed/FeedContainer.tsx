import React, { useCallback, FC } from "react";
import FeedPresenter from "./FeedPresenter";
import { useVssState, useVssDispatch, SHOW_NOTICE_MODAL } from "../../context";

/**
 * Component for feed
 *
 * @Container
 * @author frisk
 */
const FeedContainer: FC = () => {
  const { isMaster } = useVssState();
  const dispatch = useVssDispatch();

  const handleAddNotice = useCallback(() => {
    dispatch({
      type: SHOW_NOTICE_MODAL,
      action: "add",
      actionText: "등록",
      title: "",
      description: "",
      noticeId: ""
    });
  }, []);

  return <FeedPresenter isMaster={isMaster} onAddNotice={handleAddNotice} />;
};

export default FeedContainer;
