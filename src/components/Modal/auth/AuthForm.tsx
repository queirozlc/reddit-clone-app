import Button from '@/components/Button'
import { authModalState } from '@/utils/atoms/authModalAtom'
import { authInputValdiationSchema } from '@/utils/schemas/authInputValdiationSchema'
import { useFormik } from 'formik'
import Link from 'next/link'
import { useSetRecoilState } from 'recoil'
import InputGroup from './InputGroup'

interface AuthFormProps {
  view: 'login' | 'signup' | 'resetPassword'
  hasLink?: boolean
}

const AuthForm: React.FC<AuthFormProps> = ({ view, hasLink }) => {
  const setAuthModalState = useSetRecoilState(authModalState)

  function onSubmit(values: any) {
    console.log(values)
  }

  const { values, handleBlur, handleChange, errors, handleSubmit, dirty } =
    useFormik({
      initialValues: {
        username: '',
        password: '',
        email: ''
      },
      validationSchema: authInputValdiationSchema,
      onSubmit
    })

  function handleModalView() {
    setAuthModalState((prevState) => ({
      ...prevState,
      view: prevState.view === 'login' ? 'signup' : 'login'
    }))
  }

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      {view === 'login' && (
        <>
          <div className="space-y-4">
            <InputGroup
              id="username"
              label="Username"
              type="text"
              placeholder="Username"
              required
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.username}
              dirty={dirty}
            />

            <InputGroup
              id="password"
              label="Password"
              type="password"
              placeholder="Password"
              required
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors?.password}
              dirty={dirty}
            />
          </div>

          <div className="flex flex-col space-y-4 pt-3 lg:space-y-5">
            <div className="text-sm font-title font-normal">
              <span>
                Forget your <span className="spanLink">username</span> or{' '}
                <span className="spanLink">password</span> ?
              </span>
            </div>

            <Button text="Log In" variant={{ brand: true }} type="submit" />

            <div className="text-sm font-title font-normal">
              <span>
                New to Reddit?{' '}
                {hasLink ? (
                  <Link
                    href={'/register'}
                    className="spanLink"
                    onClick={handleModalView}
                  >
                    Sign Up
                  </Link>
                ) : (
                  <span className="spanLink" onClick={handleModalView}>
                    Sign Up
                  </span>
                )}
              </span>
            </div>
          </div>
        </>
      )}

      {view === 'signup' && (
        <div className="space-y-5 flex flex-col mt-6">
          <InputGroup
            id="email"
            label="Email"
            type="email"
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors?.email}
            dirty={dirty}
          />

          <Button
            text="Continue"
            variant={{ brand: true }}
            disabled
            type="submit"
          />
          <span className="text-sm font-title font-normal">
            Already a redditor?{' '}
            {hasLink ? (
              <Link
                href={'/login'}
                className="spanLink"
                onClick={handleModalView}
              >
                Log In
              </Link>
            ) : (
              <span className="spanLink" onClick={handleModalView}>
                Log In
              </span>
            )}
          </span>
        </div>
      )}
    </form>
  )
}

export default AuthForm
