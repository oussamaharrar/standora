export async function getServerSideProps() {
  return {
    redirect: {
      destination: "/last-update",
      permanent: true,
    },
  };
}

export default function LegacyChangelogRedirect() {
  return null;
}
