export default function BullsEye({ eyeColor, score, changeScore, isDisabled }) {
  return (
    <button
      type="button"
      className={`${eyeColor} flex h-36 w-36 items-center justify-center p-8 shadow shadow-slate-200`}
      data-color="Dynamisk verdi"
      data-point="Dynamisk verdi"
      data-testid="button"
      disabled={isDisabled}
      onClick={() => {
        if (eyeColor === 'red') {
          window.location.reload()
        } else {
          changeScore(score + 1)
        }
      }}
    >
      <span className="pointer-events-none block h-12 w-12 rounded-full" />
    </button>
  )
}
