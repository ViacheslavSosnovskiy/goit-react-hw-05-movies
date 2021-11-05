export default function LoadMoreButton({ onLoadMore }) {
  return (
    <div>
      <button type="button" onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
}
