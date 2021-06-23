import styles from './TicTacToeBoard.module.css';
import {
  PlayerMark,
  BoardState,
  Board,
  WINNING_PLAY_LABELS,
} from '@tic-tac-toe/game-state';

const isMarkOnPosition = ({
  mark,
  positionValue,
}: {
  mark: PlayerMark;
  positionValue: PlayerMark | null;
}) => {
  return mark === positionValue;
};

const TicTacToeBoard = ({
  boardState,
  winLane,
  onPositionClicked,
}: {
  boardState?: BoardState;
  winLane?: WINNING_PLAY_LABELS;
  onPositionClicked?: (number: number) => void;
}) => {
  if (!boardState || boardState.length !== 9) return null;
  return (
    <svg
      data-testid="TicTacToeBoard"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Tic-Tac-Toe-Background">
        <rect width="200" height="200" fill="white" />
        <g id="Group 12">
          <rect
            id="Rectangle 8"
            data-testid=""
            x="31"
            y="70"
            width="140"
            height="9"
            rx="4.5"
            fill="#231F20"
          />
          <rect
            id="Rectangle 9"
            x="31"
            y="126"
            width="140"
            height="9"
            rx="4.5"
            fill="#231F20"
          />
          <rect
            id="Rectangle 10"
            x="79"
            y="31"
            width="140"
            height="9"
            rx="4.5"
            transform="rotate(90 79 31)"
            fill="#231F20"
          />
          <rect
            id="Rectangle 11"
            x="130"
            y="31"
            width="140"
            height="9"
            rx="4.5"
            transform="rotate(90 130 31)"
            fill="#231F20"
          />
          <rect
            id="Position 0"
            data-testid={'Position-0'}
            onClick={() => (onPositionClicked ? onPositionClicked(0) : null)}
            className={boardState[0] !== null  ? styles.hidden : '' }
            x="28"
            y="28"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 1"
            data-testid={'Position-1'}
            onClick={() => (onPositionClicked ? onPositionClicked(1) : null)}
            className={boardState[1] !== null  ? styles.hidden : '' }
            x="79"
            y="28"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 2"
            data-testid={'Position-2'}
            className={boardState[2] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(2) : null)}
            x="130"
            y="28"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 3"
            data-testid={'Position-3'}
            className={boardState[3] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(3) : null)}
            x="28"
            y="81"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 4"
            data-testid={'Position-4'}
            className={boardState[4] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(4) : null)}
            x="79"
            y="81"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 5"
            data-testid={'Position-5'}
            className={boardState[5] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(5) : null)}
            x="130"
            y="81"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 6"
            data-testid={'Position-6'}
            className={boardState[6] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(6) : null)}
            x="28"
            y="135"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 7"
            data-testid={'Position-7'}
            className={boardState[7] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(7) : null)}
            x="79"
            y="135"
            width="42"
            height="42"
            fill="white"
          />
          <rect
            id="Position 8"
            data-testid={'Position-8'}
            className={boardState[8] !== null  ? styles.hidden : '' }
            onClick={() => (onPositionClicked ? onPositionClicked(8) : null)}
            x="130"
            y="135"
            width="42"
            height="42"
            fill="white"
          />
          <path
            id="0-X"
            data-testid={'0-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[0],
              })
                ? ''
                : styles.hidden
            }`}
            d="M62.0391 62H58.1367L52.4414 51.6289L46.7637 62H42.8789L50.4199 48.5352L43.248 35.8086H47.0625L52.4414 45.582L57.8555 35.8086H61.6699L54.5156 48.5352L62.0391 62Z"
            fill="black"
          />
          <path
            id="0-O"
            data-testid={'0-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[0],
              })
                ? ''
                : styles.hidden
            }`}
            d="M54.4805 62.4219C53.4609 62.4219 52.5527 62.3984 51.7559 62.3516C50.9707 62.3047 50.2441 62.1875 49.5762 62C48.9082 61.8242 48.334 61.6602 47.8535 61.5078C47.3848 61.3555 46.957 61.0684 46.5703 60.6465C46.1953 60.2129 45.8848 59.8438 45.6387 59.5391C45.3926 59.2227 45.1816 58.707 45.0059 57.9922C44.8301 57.2656 44.7012 56.6504 44.6191 56.1465C44.5371 55.6309 44.4668 54.8398 44.4082 53.7734C44.3613 52.707 44.332 51.793 44.3203 51.0312C44.3203 50.2695 44.3203 49.168 44.3203 47.7266C44.3203 45.9922 44.3672 44.5508 44.4609 43.4023C44.5547 42.2539 44.7363 41.1875 45.0059 40.2031C45.2871 39.2188 45.6504 38.4453 46.0957 37.8828C46.5527 37.3203 47.168 36.8398 47.9414 36.4414C48.7266 36.0312 49.6348 35.7559 50.666 35.6152C51.709 35.4629 52.9805 35.3867 54.4805 35.3867C55.8984 35.3867 57.1113 35.457 58.1191 35.5977C59.127 35.7383 60.0176 35.9902 60.791 36.3535C61.5762 36.7051 62.2031 37.1504 62.6719 37.6895C63.1523 38.2168 63.5449 38.9141 63.8496 39.7812C64.1543 40.6484 64.3594 41.6211 64.4648 42.6992C64.582 43.7656 64.6406 45.0664 64.6406 46.6016C64.6406 50.9375 64.5762 53.791 64.4473 55.1621C64.2246 57.5059 63.6855 59.1816 62.8301 60.1895C61.9277 61.2676 60.3926 61.9473 58.2246 62.2285C57.1934 62.3574 55.9453 62.4219 54.4805 62.4219ZM56.9941 38.1641C56.3262 38.1172 55.4883 38.0938 54.4805 38.0938C53.4727 38.0938 52.6348 38.1172 51.9668 38.1641C51.2988 38.2109 50.7129 38.3105 50.209 38.4629C49.7168 38.6152 49.3359 38.7852 49.0664 38.9727C48.7969 39.1602 48.5742 39.4531 48.3984 39.8516C48.2344 40.2383 48.123 40.6367 48.0645 41.0469C48.0176 41.457 47.9824 42.0137 47.959 42.7168C47.9238 44.8848 47.9062 47.0645 47.9062 49.2559C47.9062 52.5605 47.9941 54.8223 48.1699 56.041C48.4512 57.8691 48.9844 58.9238 49.7695 59.2051C50.3555 59.5449 51.9258 59.7148 54.4805 59.7148C57.0352 59.7148 58.6055 59.5449 59.1914 59.2051C59.4141 59.123 59.6133 58.9883 59.7891 58.8008C59.9766 58.6133 60.1289 58.3613 60.2461 58.0449C60.375 57.7285 60.4863 57.4121 60.5801 57.0957C60.6738 56.7676 60.75 56.3516 60.8086 55.8477C60.8672 55.3438 60.9141 54.8926 60.9492 54.4941C60.9844 54.084 61.0078 53.5684 61.0195 52.9473C61.0312 52.3145 61.0371 51.793 61.0371 51.3828C61.0488 50.9727 61.0547 50.4277 61.0547 49.748C61.0547 47.3809 61.0371 45.0371 61.002 42.7168C60.9785 42.0137 60.9375 41.457 60.8789 41.0469C60.832 40.6367 60.7207 40.2383 60.5449 39.8516C60.3809 39.4531 60.1641 39.1602 59.8945 38.9727C59.625 38.7852 59.2383 38.6152 58.7344 38.4629C58.2422 38.3105 57.6621 38.2109 56.9941 38.1641Z"
            fill="black"
          />
          <path
            id="1-X"
            data-testid={'1-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[1],
              })
                ? ''
                : styles.hidden
            }`}
            d="M110.039 62H106.137L100.441 51.6289L94.7637 62H90.8789L98.4199 48.5352L91.248 35.8086H95.0625L100.441 45.582L105.855 35.8086H109.67L102.516 48.5352L110.039 62Z"
            fill="black"
          />
          <path
            id="1-O"
            data-testid={'1-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[1],
              })
                ? ''
                : styles.hidden
            }`}
            d="M102.48 62.4219C101.461 62.4219 100.553 62.3984 99.7559 62.3516C98.9707 62.3047 98.2441 62.1875 97.5762 62C96.9082 61.8242 96.334 61.6602 95.8535 61.5078C95.3848 61.3555 94.957 61.0684 94.5703 60.6465C94.1953 60.2129 93.8848 59.8438 93.6387 59.5391C93.3926 59.2227 93.1816 58.707 93.0059 57.9922C92.8301 57.2656 92.7012 56.6504 92.6191 56.1465C92.5371 55.6309 92.4668 54.8398 92.4082 53.7734C92.3613 52.707 92.332 51.793 92.3203 51.0312C92.3203 50.2695 92.3203 49.168 92.3203 47.7266C92.3203 45.9922 92.3672 44.5508 92.4609 43.4023C92.5547 42.2539 92.7363 41.1875 93.0059 40.2031C93.2871 39.2188 93.6504 38.4453 94.0957 37.8828C94.5527 37.3203 95.168 36.8398 95.9414 36.4414C96.7266 36.0312 97.6348 35.7559 98.666 35.6152C99.709 35.4629 100.98 35.3867 102.48 35.3867C103.898 35.3867 105.111 35.457 106.119 35.5977C107.127 35.7383 108.018 35.9902 108.791 36.3535C109.576 36.7051 110.203 37.1504 110.672 37.6895C111.152 38.2168 111.545 38.9141 111.85 39.7812C112.154 40.6484 112.359 41.6211 112.465 42.6992C112.582 43.7656 112.641 45.0664 112.641 46.6016C112.641 50.9375 112.576 53.791 112.447 55.1621C112.225 57.5059 111.686 59.1816 110.83 60.1895C109.928 61.2676 108.393 61.9473 106.225 62.2285C105.193 62.3574 103.945 62.4219 102.48 62.4219ZM104.994 38.1641C104.326 38.1172 103.488 38.0938 102.48 38.0938C101.473 38.0938 100.635 38.1172 99.9668 38.1641C99.2988 38.2109 98.7129 38.3105 98.209 38.4629C97.7168 38.6152 97.3359 38.7852 97.0664 38.9727C96.7969 39.1602 96.5742 39.4531 96.3984 39.8516C96.2344 40.2383 96.123 40.6367 96.0645 41.0469C96.0176 41.457 95.9824 42.0137 95.959 42.7168C95.9238 44.8848 95.9062 47.0645 95.9062 49.2559C95.9062 52.5605 95.9941 54.8223 96.1699 56.041C96.4512 57.8691 96.9844 58.9238 97.7695 59.2051C98.3555 59.5449 99.9258 59.7148 102.48 59.7148C105.035 59.7148 106.605 59.5449 107.191 59.2051C107.414 59.123 107.613 58.9883 107.789 58.8008C107.977 58.6133 108.129 58.3613 108.246 58.0449C108.375 57.7285 108.486 57.4121 108.58 57.0957C108.674 56.7676 108.75 56.3516 108.809 55.8477C108.867 55.3438 108.914 54.8926 108.949 54.4941C108.984 54.084 109.008 53.5684 109.02 52.9473C109.031 52.3145 109.037 51.793 109.037 51.3828C109.049 50.9727 109.055 50.4277 109.055 49.748C109.055 47.3809 109.037 45.0371 109.002 42.7168C108.979 42.0137 108.938 41.457 108.879 41.0469C108.832 40.6367 108.721 40.2383 108.545 39.8516C108.381 39.4531 108.164 39.1602 107.895 38.9727C107.625 38.7852 107.238 38.6152 106.734 38.4629C106.242 38.3105 105.662 38.2109 104.994 38.1641Z"
            fill="black"
          />
          <path
            id="2-X"
            data-testid={'2-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[2],
              })
                ? ''
                : styles.hidden
            }`}
            d="M160.039 62H156.137L150.441 51.6289L144.764 62H140.879L148.42 48.5352L141.248 35.8086H145.062L150.441 45.582L155.855 35.8086H159.67L152.516 48.5352L160.039 62Z"
            fill="black"
          />
          <path
            id="2-O"
            data-testid={'2-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[2],
              })
                ? ''
                : styles.hidden
            }`}
            d="M152.48 62.4219C151.461 62.4219 150.553 62.3984 149.756 62.3516C148.971 62.3047 148.244 62.1875 147.576 62C146.908 61.8242 146.334 61.6602 145.854 61.5078C145.385 61.3555 144.957 61.0684 144.57 60.6465C144.195 60.2129 143.885 59.8438 143.639 59.5391C143.393 59.2227 143.182 58.707 143.006 57.9922C142.83 57.2656 142.701 56.6504 142.619 56.1465C142.537 55.6309 142.467 54.8398 142.408 53.7734C142.361 52.707 142.332 51.793 142.32 51.0312C142.32 50.2695 142.32 49.168 142.32 47.7266C142.32 45.9922 142.367 44.5508 142.461 43.4023C142.555 42.2539 142.736 41.1875 143.006 40.2031C143.287 39.2188 143.65 38.4453 144.096 37.8828C144.553 37.3203 145.168 36.8398 145.941 36.4414C146.727 36.0312 147.635 35.7559 148.666 35.6152C149.709 35.4629 150.98 35.3867 152.48 35.3867C153.898 35.3867 155.111 35.457 156.119 35.5977C157.127 35.7383 158.018 35.9902 158.791 36.3535C159.576 36.7051 160.203 37.1504 160.672 37.6895C161.152 38.2168 161.545 38.9141 161.85 39.7812C162.154 40.6484 162.359 41.6211 162.465 42.6992C162.582 43.7656 162.641 45.0664 162.641 46.6016C162.641 50.9375 162.576 53.791 162.447 55.1621C162.225 57.5059 161.686 59.1816 160.83 60.1895C159.928 61.2676 158.393 61.9473 156.225 62.2285C155.193 62.3574 153.945 62.4219 152.48 62.4219ZM154.994 38.1641C154.326 38.1172 153.488 38.0938 152.48 38.0938C151.473 38.0938 150.635 38.1172 149.967 38.1641C149.299 38.2109 148.713 38.3105 148.209 38.4629C147.717 38.6152 147.336 38.7852 147.066 38.9727C146.797 39.1602 146.574 39.4531 146.398 39.8516C146.234 40.2383 146.123 40.6367 146.064 41.0469C146.018 41.457 145.982 42.0137 145.959 42.7168C145.924 44.8848 145.906 47.0645 145.906 49.2559C145.906 52.5605 145.994 54.8223 146.17 56.041C146.451 57.8691 146.984 58.9238 147.77 59.2051C148.355 59.5449 149.926 59.7148 152.48 59.7148C155.035 59.7148 156.605 59.5449 157.191 59.2051C157.414 59.123 157.613 58.9883 157.789 58.8008C157.977 58.6133 158.129 58.3613 158.246 58.0449C158.375 57.7285 158.486 57.4121 158.58 57.0957C158.674 56.7676 158.75 56.3516 158.809 55.8477C158.867 55.3438 158.914 54.8926 158.949 54.4941C158.984 54.084 159.008 53.5684 159.02 52.9473C159.031 52.3145 159.037 51.793 159.037 51.3828C159.049 50.9727 159.055 50.4277 159.055 49.748C159.055 47.3809 159.037 45.0371 159.002 42.7168C158.979 42.0137 158.938 41.457 158.879 41.0469C158.832 40.6367 158.721 40.2383 158.545 39.8516C158.381 39.4531 158.164 39.1602 157.895 38.9727C157.625 38.7852 157.238 38.6152 156.734 38.4629C156.242 38.3105 155.662 38.2109 154.994 38.1641Z"
            fill="black"
          />
          <path
            id="7-X"
            data-testid={'7-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[7],
              })
                ? ''
                : styles.hidden
            }`}
            d="M110.039 166H106.137L100.441 155.629L94.7637 166H90.8789L98.4199 152.535L91.248 139.809H95.0625L100.441 149.582L105.855 139.809H109.67L102.516 152.535L110.039 166Z"
            fill="black"
          />
          <path
            id="7-O"
            data-testid={'7-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[7],
              })
                ? ''
                : styles.hidden
            }`}
            d="M100.48 166.422C99.4609 166.422 98.5527 166.398 97.7559 166.352C96.9707 166.305 96.2441 166.188 95.5762 166C94.9082 165.824 94.334 165.66 93.8535 165.508C93.3848 165.355 92.957 165.068 92.5703 164.646C92.1953 164.213 91.8848 163.844 91.6387 163.539C91.3926 163.223 91.1816 162.707 91.0059 161.992C90.8301 161.266 90.7012 160.65 90.6191 160.146C90.5371 159.631 90.4668 158.84 90.4082 157.773C90.3613 156.707 90.332 155.793 90.3203 155.031C90.3203 154.27 90.3203 153.168 90.3203 151.727C90.3203 149.992 90.3672 148.551 90.4609 147.402C90.5547 146.254 90.7363 145.188 91.0059 144.203C91.2871 143.219 91.6504 142.445 92.0957 141.883C92.5527 141.32 93.168 140.84 93.9414 140.441C94.7266 140.031 95.6348 139.756 96.666 139.615C97.709 139.463 98.9805 139.387 100.48 139.387C101.898 139.387 103.111 139.457 104.119 139.598C105.127 139.738 106.018 139.99 106.791 140.354C107.576 140.705 108.203 141.15 108.672 141.689C109.152 142.217 109.545 142.914 109.85 143.781C110.154 144.648 110.359 145.621 110.465 146.699C110.582 147.766 110.641 149.066 110.641 150.602C110.641 154.938 110.576 157.791 110.447 159.162C110.225 161.506 109.686 163.182 108.83 164.189C107.928 165.268 106.393 165.947 104.225 166.229C103.193 166.357 101.945 166.422 100.48 166.422ZM102.994 142.164C102.326 142.117 101.488 142.094 100.48 142.094C99.4727 142.094 98.6348 142.117 97.9668 142.164C97.2988 142.211 96.7129 142.311 96.209 142.463C95.7168 142.615 95.3359 142.785 95.0664 142.973C94.7969 143.16 94.5742 143.453 94.3984 143.852C94.2344 144.238 94.123 144.637 94.0645 145.047C94.0176 145.457 93.9824 146.014 93.959 146.717C93.9238 148.885 93.9062 151.064 93.9062 153.256C93.9062 156.561 93.9941 158.822 94.1699 160.041C94.4512 161.869 94.9844 162.924 95.7695 163.205C96.3555 163.545 97.9258 163.715 100.48 163.715C103.035 163.715 104.605 163.545 105.191 163.205C105.414 163.123 105.613 162.988 105.789 162.801C105.977 162.613 106.129 162.361 106.246 162.045C106.375 161.729 106.486 161.412 106.58 161.096C106.674 160.768 106.75 160.352 106.809 159.848C106.867 159.344 106.914 158.893 106.949 158.494C106.984 158.084 107.008 157.568 107.02 156.947C107.031 156.314 107.037 155.793 107.037 155.383C107.049 154.973 107.055 154.428 107.055 153.748C107.055 151.381 107.037 149.037 107.002 146.717C106.979 146.014 106.938 145.457 106.879 145.047C106.832 144.637 106.721 144.238 106.545 143.852C106.381 143.453 106.164 143.16 105.895 142.973C105.625 142.785 105.238 142.615 104.734 142.463C104.242 142.311 103.662 142.211 102.994 142.164Z"
            fill="black"
          />
          <path
            id="4-X"
            data-testid={'4-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[4],
              })
                ? ''
                : styles.hidden
            }`}
            d="M110.039 116H106.137L100.441 105.629L94.7637 116H90.8789L98.4199 102.535L91.248 89.8086H95.0625L100.441 99.582L105.855 89.8086H109.67L102.516 102.535L110.039 116Z"
            fill="black"
          />
          <path
            id="4-O"
            data-testid={'4-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[4],
              })
                ? ''
                : styles.hidden
            }`}
            d="M100.48 116.422C99.4609 116.422 98.5527 116.398 97.7559 116.352C96.9707 116.305 96.2441 116.188 95.5762 116C94.9082 115.824 94.334 115.66 93.8535 115.508C93.3848 115.355 92.957 115.068 92.5703 114.646C92.1953 114.213 91.8848 113.844 91.6387 113.539C91.3926 113.223 91.1816 112.707 91.0059 111.992C90.8301 111.266 90.7012 110.65 90.6191 110.146C90.5371 109.631 90.4668 108.84 90.4082 107.773C90.3613 106.707 90.332 105.793 90.3203 105.031C90.3203 104.27 90.3203 103.168 90.3203 101.727C90.3203 99.9922 90.3672 98.5508 90.4609 97.4023C90.5547 96.2539 90.7363 95.1875 91.0059 94.2031C91.2871 93.2188 91.6504 92.4453 92.0957 91.8828C92.5527 91.3203 93.168 90.8398 93.9414 90.4414C94.7266 90.0312 95.6348 89.7559 96.666 89.6152C97.709 89.4629 98.9805 89.3867 100.48 89.3867C101.898 89.3867 103.111 89.457 104.119 89.5977C105.127 89.7383 106.018 89.9902 106.791 90.3535C107.576 90.7051 108.203 91.1504 108.672 91.6895C109.152 92.2168 109.545 92.9141 109.85 93.7812C110.154 94.6484 110.359 95.6211 110.465 96.6992C110.582 97.7656 110.641 99.0664 110.641 100.602C110.641 104.938 110.576 107.791 110.447 109.162C110.225 111.506 109.686 113.182 108.83 114.189C107.928 115.268 106.393 115.947 104.225 116.229C103.193 116.357 101.945 116.422 100.48 116.422ZM102.994 92.1641C102.326 92.1172 101.488 92.0938 100.48 92.0938C99.4727 92.0938 98.6348 92.1172 97.9668 92.1641C97.2988 92.2109 96.7129 92.3105 96.209 92.4629C95.7168 92.6152 95.3359 92.7852 95.0664 92.9727C94.7969 93.1602 94.5742 93.4531 94.3984 93.8516C94.2344 94.2383 94.123 94.6367 94.0645 95.0469C94.0176 95.457 93.9824 96.0137 93.959 96.7168C93.9238 98.8848 93.9062 101.064 93.9062 103.256C93.9062 106.561 93.9941 108.822 94.1699 110.041C94.4512 111.869 94.9844 112.924 95.7695 113.205C96.3555 113.545 97.9258 113.715 100.48 113.715C103.035 113.715 104.605 113.545 105.191 113.205C105.414 113.123 105.613 112.988 105.789 112.801C105.977 112.613 106.129 112.361 106.246 112.045C106.375 111.729 106.486 111.412 106.58 111.096C106.674 110.768 106.75 110.352 106.809 109.848C106.867 109.344 106.914 108.893 106.949 108.494C106.984 108.084 107.008 107.568 107.02 106.947C107.031 106.314 107.037 105.793 107.037 105.383C107.049 104.973 107.055 104.428 107.055 103.748C107.055 101.381 107.037 99.0371 107.002 96.7168C106.979 96.0137 106.938 95.457 106.879 95.0469C106.832 94.6367 106.721 94.2383 106.545 93.8516C106.381 93.4531 106.164 93.1602 105.895 92.9727C105.625 92.7852 105.238 92.6152 104.734 92.4629C104.242 92.3105 103.662 92.2109 102.994 92.1641Z"
            fill="black"
          />
          <path
            id="5-X"
            data-testid={'5-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[5],
              })
                ? ''
                : styles.hidden
            }`}
            d="M160.039 114H156.137L150.441 103.629L144.764 114H140.879L148.42 100.535L141.248 87.8086H145.062L150.441 97.582L155.855 87.8086H159.67L152.516 100.535L160.039 114Z"
            fill="black"
          />
          <path
            id="5-O"
            data-testid={'5-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[5],
              })
                ? ''
                : styles.hidden
            }`}
            d="M152.48 114.422C151.461 114.422 150.553 114.398 149.756 114.352C148.971 114.305 148.244 114.188 147.576 114C146.908 113.824 146.334 113.66 145.854 113.508C145.385 113.355 144.957 113.068 144.57 112.646C144.195 112.213 143.885 111.844 143.639 111.539C143.393 111.223 143.182 110.707 143.006 109.992C142.83 109.266 142.701 108.65 142.619 108.146C142.537 107.631 142.467 106.84 142.408 105.773C142.361 104.707 142.332 103.793 142.32 103.031C142.32 102.27 142.32 101.168 142.32 99.7266C142.32 97.9922 142.367 96.5508 142.461 95.4023C142.555 94.2539 142.736 93.1875 143.006 92.2031C143.287 91.2188 143.65 90.4453 144.096 89.8828C144.553 89.3203 145.168 88.8398 145.941 88.4414C146.727 88.0312 147.635 87.7559 148.666 87.6152C149.709 87.4629 150.98 87.3867 152.48 87.3867C153.898 87.3867 155.111 87.457 156.119 87.5977C157.127 87.7383 158.018 87.9902 158.791 88.3535C159.576 88.7051 160.203 89.1504 160.672 89.6895C161.152 90.2168 161.545 90.9141 161.85 91.7812C162.154 92.6484 162.359 93.6211 162.465 94.6992C162.582 95.7656 162.641 97.0664 162.641 98.6016C162.641 102.938 162.576 105.791 162.447 107.162C162.225 109.506 161.686 111.182 160.83 112.189C159.928 113.268 158.393 113.947 156.225 114.229C155.193 114.357 153.945 114.422 152.48 114.422ZM154.994 90.1641C154.326 90.1172 153.488 90.0938 152.48 90.0938C151.473 90.0938 150.635 90.1172 149.967 90.1641C149.299 90.2109 148.713 90.3105 148.209 90.4629C147.717 90.6152 147.336 90.7852 147.066 90.9727C146.797 91.1602 146.574 91.4531 146.398 91.8516C146.234 92.2383 146.123 92.6367 146.064 93.0469C146.018 93.457 145.982 94.0137 145.959 94.7168C145.924 96.8848 145.906 99.0645 145.906 101.256C145.906 104.561 145.994 106.822 146.17 108.041C146.451 109.869 146.984 110.924 147.77 111.205C148.355 111.545 149.926 111.715 152.48 111.715C155.035 111.715 156.605 111.545 157.191 111.205C157.414 111.123 157.613 110.988 157.789 110.801C157.977 110.613 158.129 110.361 158.246 110.045C158.375 109.729 158.486 109.412 158.58 109.096C158.674 108.768 158.75 108.352 158.809 107.848C158.867 107.344 158.914 106.893 158.949 106.494C158.984 106.084 159.008 105.568 159.02 104.947C159.031 104.314 159.037 103.793 159.037 103.383C159.049 102.973 159.055 102.428 159.055 101.748C159.055 99.3809 159.037 97.0371 159.002 94.7168C158.979 94.0137 158.938 93.457 158.879 93.0469C158.832 92.6367 158.721 92.2383 158.545 91.8516C158.381 91.4531 158.164 91.1602 157.895 90.9727C157.625 90.7852 157.238 90.6152 156.734 90.4629C156.242 90.3105 155.662 90.2109 154.994 90.1641Z"
            fill="black"
          />
          <path
            id="6-X"
            data-testid={'6-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[6],
              })
                ? ''
                : styles.hidden
            }`}
            d="M62.0391 166H58.1367L52.4414 155.629L46.7637 166H42.8789L50.4199 152.535L43.248 139.809H47.0625L52.4414 149.582L57.8555 139.809H61.6699L54.5156 152.535L62.0391 166Z"
            fill="black"
          />
          <path
            id="6-O"
            data-testid={'6-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[6],
              })
                ? ''
                : styles.hidden
            }`}
            d="M54.4805 166.422C53.4609 166.422 52.5527 166.398 51.7559 166.352C50.9707 166.305 50.2441 166.188 49.5762 166C48.9082 165.824 48.334 165.66 47.8535 165.508C47.3848 165.355 46.957 165.068 46.5703 164.646C46.1953 164.213 45.8848 163.844 45.6387 163.539C45.3926 163.223 45.1816 162.707 45.0059 161.992C44.8301 161.266 44.7012 160.65 44.6191 160.146C44.5371 159.631 44.4668 158.84 44.4082 157.773C44.3613 156.707 44.332 155.793 44.3203 155.031C44.3203 154.27 44.3203 153.168 44.3203 151.727C44.3203 149.992 44.3672 148.551 44.4609 147.402C44.5547 146.254 44.7363 145.188 45.0059 144.203C45.2871 143.219 45.6504 142.445 46.0957 141.883C46.5527 141.32 47.168 140.84 47.9414 140.441C48.7266 140.031 49.6348 139.756 50.666 139.615C51.709 139.463 52.9805 139.387 54.4805 139.387C55.8984 139.387 57.1113 139.457 58.1191 139.598C59.127 139.738 60.0176 139.99 60.791 140.354C61.5762 140.705 62.2031 141.15 62.6719 141.689C63.1523 142.217 63.5449 142.914 63.8496 143.781C64.1543 144.648 64.3594 145.621 64.4648 146.699C64.582 147.766 64.6406 149.066 64.6406 150.602C64.6406 154.938 64.5762 157.791 64.4473 159.162C64.2246 161.506 63.6855 163.182 62.8301 164.189C61.9277 165.268 60.3926 165.947 58.2246 166.229C57.1934 166.357 55.9453 166.422 54.4805 166.422ZM56.9941 142.164C56.3262 142.117 55.4883 142.094 54.4805 142.094C53.4727 142.094 52.6348 142.117 51.9668 142.164C51.2988 142.211 50.7129 142.311 50.209 142.463C49.7168 142.615 49.3359 142.785 49.0664 142.973C48.7969 143.16 48.5742 143.453 48.3984 143.852C48.2344 144.238 48.123 144.637 48.0645 145.047C48.0176 145.457 47.9824 146.014 47.959 146.717C47.9238 148.885 47.9062 151.064 47.9062 153.256C47.9062 156.561 47.9941 158.822 48.1699 160.041C48.4512 161.869 48.9844 162.924 49.7695 163.205C50.3555 163.545 51.9258 163.715 54.4805 163.715C57.0352 163.715 58.6055 163.545 59.1914 163.205C59.4141 163.123 59.6133 162.988 59.7891 162.801C59.9766 162.613 60.1289 162.361 60.2461 162.045C60.375 161.729 60.4863 161.412 60.5801 161.096C60.6738 160.768 60.75 160.352 60.8086 159.848C60.8672 159.344 60.9141 158.893 60.9492 158.494C60.9844 158.084 61.0078 157.568 61.0195 156.947C61.0312 156.314 61.0371 155.793 61.0371 155.383C61.0488 154.973 61.0547 154.428 61.0547 153.748C61.0547 151.381 61.0371 149.037 61.002 146.717C60.9785 146.014 60.9375 145.457 60.8789 145.047C60.832 144.637 60.7207 144.238 60.5449 143.852C60.3809 143.453 60.1641 143.16 59.8945 142.973C59.625 142.785 59.2383 142.615 58.7344 142.463C58.2422 142.311 57.6621 142.211 56.9941 142.164Z"
            fill="black"
          />

          <path
            id="3-X"
            data-testid={'3-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[3],
              })
                ? ''
                : styles.hidden
            }`}
            d="M62.0391 116H58.1367L52.4414 105.629L46.7637 116H42.8789L50.4199 102.535L43.248 89.8086H47.0625L52.4414 99.582L57.8555 89.8086H61.6699L54.5156 102.535L62.0391 116Z"
            fill="black"
          />
          <path
            id="3-O"
            data-testid={'3-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[3],
              })
                ? ''
                : styles.hidden
            }`}
            d="M54.4805 116.422C53.4609 116.422 52.5527 116.398 51.7559 116.352C50.9707 116.305 50.2441 116.188 49.5762 116C48.9082 115.824 48.334 115.66 47.8535 115.508C47.3848 115.355 46.957 115.068 46.5703 114.646C46.1953 114.213 45.8848 113.844 45.6387 113.539C45.3926 113.223 45.1816 112.707 45.0059 111.992C44.8301 111.266 44.7012 110.65 44.6191 110.146C44.5371 109.631 44.4668 108.84 44.4082 107.773C44.3613 106.707 44.332 105.793 44.3203 105.031C44.3203 104.27 44.3203 103.168 44.3203 101.727C44.3203 99.9922 44.3672 98.5508 44.4609 97.4023C44.5547 96.2539 44.7363 95.1875 45.0059 94.2031C45.2871 93.2188 45.6504 92.4453 46.0957 91.8828C46.5527 91.3203 47.168 90.8398 47.9414 90.4414C48.7266 90.0312 49.6348 89.7559 50.666 89.6152C51.709 89.4629 52.9805 89.3867 54.4805 89.3867C55.8984 89.3867 57.1113 89.457 58.1191 89.5977C59.127 89.7383 60.0176 89.9902 60.791 90.3535C61.5762 90.7051 62.2031 91.1504 62.6719 91.6895C63.1523 92.2168 63.5449 92.9141 63.8496 93.7812C64.1543 94.6484 64.3594 95.6211 64.4648 96.6992C64.582 97.7656 64.6406 99.0664 64.6406 100.602C64.6406 104.938 64.5762 107.791 64.4473 109.162C64.2246 111.506 63.6855 113.182 62.8301 114.189C61.9277 115.268 60.3926 115.947 58.2246 116.229C57.1934 116.357 55.9453 116.422 54.4805 116.422ZM56.9941 92.1641C56.3262 92.1172 55.4883 92.0938 54.4805 92.0938C53.4727 92.0938 52.6348 92.1172 51.9668 92.1641C51.2988 92.2109 50.7129 92.3105 50.209 92.4629C49.7168 92.6152 49.3359 92.7852 49.0664 92.9727C48.7969 93.1602 48.5742 93.4531 48.3984 93.8516C48.2344 94.2383 48.123 94.6367 48.0645 95.0469C48.0176 95.457 47.9824 96.0137 47.959 96.7168C47.9238 98.8848 47.9062 101.064 47.9062 103.256C47.9062 106.561 47.9941 108.822 48.1699 110.041C48.4512 111.869 48.9844 112.924 49.7695 113.205C50.3555 113.545 51.9258 113.715 54.4805 113.715C57.0352 113.715 58.6055 113.545 59.1914 113.205C59.4141 113.123 59.6133 112.988 59.7891 112.801C59.9766 112.613 60.1289 112.361 60.2461 112.045C60.375 111.729 60.4863 111.412 60.5801 111.096C60.6738 110.768 60.75 110.352 60.8086 109.848C60.8672 109.344 60.9141 108.893 60.9492 108.494C60.9844 108.084 61.0078 107.568 61.0195 106.947C61.0312 106.314 61.0371 105.793 61.0371 105.383C61.0488 104.973 61.0547 104.428 61.0547 103.748C61.0547 101.381 61.0371 99.0371 61.002 96.7168C60.9785 96.0137 60.9375 95.457 60.8789 95.0469C60.832 94.6367 60.7207 94.2383 60.5449 93.8516C60.3809 93.4531 60.1641 93.1602 59.8945 92.9727C59.625 92.7852 59.2383 92.6152 58.7344 92.4629C58.2422 92.3105 57.6621 92.2109 56.9941 92.1641Z"
            fill="black"
          />
          <path
            id="8-X"
            data-testid={'8-X'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.X,
                positionValue: boardState[8],
              })
                ? ''
                : styles.hidden
            }`}
            d="M158.039 166H154.137L148.441 155.629L142.764 166H138.879L146.42 152.535L139.248 139.809H143.062L148.441 149.582L153.855 139.809H157.67L150.516 152.535L158.039 166Z"
            fill="black"
          />
          <path
            id="8-O"
            data-testid={'8-O'}
            className={`${
              isMarkOnPosition({
                mark: PlayerMark.O,
                positionValue: boardState[8],
              })
                ? ''
                : styles.hidden
            }`}
            d="M150.48 166.422C149.461 166.422 148.553 166.398 147.756 166.352C146.971 166.305 146.244 166.188 145.576 166C144.908 165.824 144.334 165.66 143.854 165.508C143.385 165.355 142.957 165.068 142.57 164.646C142.195 164.213 141.885 163.844 141.639 163.539C141.393 163.223 141.182 162.707 141.006 161.992C140.83 161.266 140.701 160.65 140.619 160.146C140.537 159.631 140.467 158.84 140.408 157.773C140.361 156.707 140.332 155.793 140.32 155.031C140.32 154.27 140.32 153.168 140.32 151.727C140.32 149.992 140.367 148.551 140.461 147.402C140.555 146.254 140.736 145.188 141.006 144.203C141.287 143.219 141.65 142.445 142.096 141.883C142.553 141.32 143.168 140.84 143.941 140.441C144.727 140.031 145.635 139.756 146.666 139.615C147.709 139.463 148.98 139.387 150.48 139.387C151.898 139.387 153.111 139.457 154.119 139.598C155.127 139.738 156.018 139.99 156.791 140.354C157.576 140.705 158.203 141.15 158.672 141.689C159.152 142.217 159.545 142.914 159.85 143.781C160.154 144.648 160.359 145.621 160.465 146.699C160.582 147.766 160.641 149.066 160.641 150.602C160.641 154.938 160.576 157.791 160.447 159.162C160.225 161.506 159.686 163.182 158.83 164.189C157.928 165.268 156.393 165.947 154.225 166.229C153.193 166.357 151.945 166.422 150.48 166.422ZM152.994 142.164C152.326 142.117 151.488 142.094 150.48 142.094C149.473 142.094 148.635 142.117 147.967 142.164C147.299 142.211 146.713 142.311 146.209 142.463C145.717 142.615 145.336 142.785 145.066 142.973C144.797 143.16 144.574 143.453 144.398 143.852C144.234 144.238 144.123 144.637 144.064 145.047C144.018 145.457 143.982 146.014 143.959 146.717C143.924 148.885 143.906 151.064 143.906 153.256C143.906 156.561 143.994 158.822 144.17 160.041C144.451 161.869 144.984 162.924 145.77 163.205C146.355 163.545 147.926 163.715 150.48 163.715C153.035 163.715 154.605 163.545 155.191 163.205C155.414 163.123 155.613 162.988 155.789 162.801C155.977 162.613 156.129 162.361 156.246 162.045C156.375 161.729 156.486 161.412 156.58 161.096C156.674 160.768 156.75 160.352 156.809 159.848C156.867 159.344 156.914 158.893 156.949 158.494C156.984 158.084 157.008 157.568 157.02 156.947C157.031 156.314 157.037 155.793 157.037 155.383C157.049 154.973 157.055 154.428 157.055 153.748C157.055 151.381 157.037 149.037 157.002 146.717C156.979 146.014 156.938 145.457 156.879 145.047C156.832 144.637 156.721 144.238 156.545 143.852C156.381 143.453 156.164 143.16 155.895 142.973C155.625 142.785 155.238 142.615 154.734 142.463C154.242 142.311 153.662 142.211 152.994 142.164Z"
            fill="black"
          />
          <rect
            id="TOP_ROW"
            data-testid={'TOP_ROW'}
            className={
              winLane === WINNING_PLAY_LABELS.TOP_ROW ? '' : styles.hidden
            }
            x="32"
            y="46"
            width="139"
            height="4"
            rx="2"
            fill="#CE234E"
          />
          <rect
            id="LEFT_COLUMN"
            data-testid={'LEFT_COLUMN'}
            className={
              winLane === WINNING_PLAY_LABELS.LEFT_COLUMN ? '' : styles.hidden
            }
            x="57"
            y="31"
            width="139"
            height="4"
            rx="2"
            transform="rotate(90 57 31)"
            fill="#CE234E"
          />
          <rect
            id="MIDDLE_COLUMN"
            data-testid={'MIDDLE_COLUMN'}
            className={
              winLane === WINNING_PLAY_LABELS.MIDDLE_COLUMN ? '' : styles.hidden
            }
            x="104"
            y="31"
            width="139"
            height="4"
            rx="2"
            transform="rotate(90 104 31)"
            fill="#CE234E"
          />
          <rect
            id="RIGHT_COLUMN"
            data-testid={'RIGHT_COLUMN'}
            className={
              winLane === WINNING_PLAY_LABELS.RIGHT_COLUMN ? '' : styles.hidden
            }
            x="153"
            y="31"
            width="139"
            height="4"
            rx="2"
            transform="rotate(90 153 31)"
            fill="#CE234E"
          />
          <rect
            id="MIDDLE_ROW"
            data-testid={'MIDDLE_ROW'}
            className={
              winLane === WINNING_PLAY_LABELS.MIDDLE_ROW ? '' : styles.hidden
            }
            x="32"
            y="99"
            width="139"
            height="4"
            rx="2"
            fill="#CE234E"
          />
          <rect
            id="BOTTOM_ROW"
            data-testid={'BOTTOM_ROW'}
            className={
              winLane === WINNING_PLAY_LABELS.BOTTOM_ROW ? '' : styles.hidden
            }
            x="32"
            y="151"
            width="139"
            height="4"
            rx="2"
            fill="#CE234E"
          />
          <rect
            id="DIAGONAL_DOWN"
            data-testid={'DIAGONAL_DOWN'}
            className={
              winLane === WINNING_PLAY_LABELS.DIAGONAL_DOWN ? '' : styles.hidden
            }
            x="50.8213"
            y="39.442"
            width="161.184"
            height="4"
            rx="2"
            transform="rotate(48.7739 50.8213 39.442)"
            fill="#CE234E"
          />
          <rect
            id="DIAGONAL_UP"
            data-testid={'DIAGONAL_UP'}
            className={
              winLane === WINNING_PLAY_LABELS.DIAGONAL_UP ? '' : styles.hidden
            }
            x="48.3457"
            y="161.157"
            width="161.184"
            height="4"
            rx="2"
            transform="rotate(-49.2862 48.3457 161.157)"
            fill="#CE234E"
          />
        </g>
      </g>
    </svg>
  );
};

export default TicTacToeBoard;