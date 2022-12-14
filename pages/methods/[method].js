import { useRouter } from 'next/router';

export default function Method() {
  const router = useRouter();
  const { method } = router.query;

  return <h1>Hello {method}</h1>;
}
