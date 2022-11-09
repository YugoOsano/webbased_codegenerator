  ! ref
  ! https://www.nag-j.co.jp/fortran/

subroutine add(x,y,z)
  implicit none
  integer,intent(in) :: x,y
  integer,intent(out) :: z
  z = x+y
  return
end subroutine add

program hello
  implicit none

  ! this corresponds to declaration in C header with need of implementation afterwards
  interface
     function addf(x,y)
       implicit none
       integer :: addf
       integer,intent(in) :: x,y
     end function addf
  end interface
  ! type can't be defined in global scope
  type :: fraction
     integer :: numerator
     integer :: denominator
  end type fraction

  ! declaration of variables has to come before statements (such as print, etc.)
  integer :: z

  print *, 'Hello, World!'

  ! use a subroutine
  call add(1,2,z)
  print *, z, ': result of add subroutine'

  ! use a function
  print *, addf(1,5), ': result of addf function'

  ! contains keyword means the subsequent procedure belongs to a module or program,
  ! where its belonging is recommended to avoid unintended bugs
contains
  type (fraction) function asis(x)
    type (fraction),intent(in) :: x
    asis = x
  end function asis

end program hello

pure integer function addf(x,y)
  integer,intent(in) :: x,y
  addf=x+y
end function addf
