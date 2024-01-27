'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
// Form
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export default function RegisterPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6'>
        <div className='space-y-1'>
          <h1 className='font-semibold tracking-tight text-2xl'>
            Sign in to your account
          </h1>
          <p className='text-muted-foreground text-sm'>
            Enter your email and password to sign in
          </p>
        </div>
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='john.doe@example.com' {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type='password' placeholder='Password' {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className='text-right mb-6 -mt-4'>
          <Link
            href='/reset-password'
            className='text-sm text-foreground font-semibold'
          >
            Forgot password
          </Link>
        </div>

        <Button type='submit' className='w-full'>
          Sign in
        </Button>

        <Separator />
        <p className='text-sm text-muted-foreground text-center'>
          Don&apos;t have an account?{' '}
          <Link href='/register' className='text-foreground font-medium'>
            Register
          </Link>
        </p>
      </form>
    </Form>
  )
}
