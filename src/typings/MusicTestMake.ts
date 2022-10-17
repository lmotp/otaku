export interface IMusicQuizInfo {
  item: any;
  onMusicQuizAdd: (newQuizItem: { videoId: any; title: string | undefined; thumbnail: any }) => void;
}
